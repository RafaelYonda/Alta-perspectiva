using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;

namespace AltaPerspectiva.Web.Areas.UserProfile.Services
{
    public class ErrorHandlingMiddleware
    {
        private readonly RequestDelegate next;

        public ErrorHandlingMiddleware(RequestDelegate next)
        {
            this.next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await next(context);
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(context, ex);
            }
        }

        private static async Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            if (exception == null) return;

            var code = HttpStatusCode.InternalServerError;
            String message=String.Empty;

            //if (exception is MyNotFoundException) code = HttpStatusCode.NotFound;
            if (exception.Message ==
                @"IDX10803: Unable to obtain configuration from: 'http://localhost:54540/.well-known/openid-configuration'.")
            {
                code = HttpStatusCode.Unauthorized;
                message = "Unauthorized";
            }
            else
            {
                message = exception.Message;
            }
            //else if (exception is MyException) code = HttpStatusCode.BadRequest;

            await WriteExceptionAsync(context, exception, code,message).ConfigureAwait(false);
        }

        private static async Task WriteExceptionAsync(HttpContext context, Exception exception, HttpStatusCode code,String message)
        {
            var response = context.Response;
            response.ContentType = "application/json";
            response.StatusCode = (int)code;
            await response.WriteAsync(JsonConvert.SerializeObject(new
            {
                error = new
                {
                    message = message,
                    exception = exception.GetType().Name,
                    InnerException = exception.InnerException!=null?exception.InnerException.Message:"",
                    StatusCode=code,
                    Source = exception.Source,
                  //  type=exception.GetType(),
                    StackTrace = exception.StackTrace
                }
            })).ConfigureAwait(false);
        }
    }
}
