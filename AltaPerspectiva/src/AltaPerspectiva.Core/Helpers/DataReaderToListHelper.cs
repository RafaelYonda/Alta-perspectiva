using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace AltaPerspectiva.Core.Helpers
{
    public class DataReaderToListHelper
    {
        public  string DataReaderToSingleColumn(string connectionString, string query,String columnName)
        {
            String returnType=String.Empty;
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();
                SqlCommand command = new SqlCommand(query, connection);
                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    returnType = Convert.ToString(reader[columnName]);
                    break;
                }
            }
            return returnType;
        }

        public  T DataReaderToObject<T>(string connectionString, string query) where T : class, new()
        {
            
            T obj = new T();
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();
                SqlCommand command = new SqlCommand(query, connection);
                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    foreach (var prop in obj.GetType().GetProperties())
                    {
                        try
                        {
                            PropertyInfo propertyInfo = obj.GetType().GetProperty(prop.Name);
                            propertyInfo.SetValue(obj, Convert.ChangeType(reader[prop.Name], propertyInfo.PropertyType), null);
                        }
                        catch
                        {
                            continue;
                        }
                    }


                }
            }
            return obj;
        }
        //public  List<T> DataReaderToList<T>(string connectionString, string query) where T : class, new()
        //{
        //    List<T> list = new List<T>();

        //    using (var connection = new SqlConnection(connectionString))
        //    {
        //        connection.Open();
        //        SqlCommand command = new SqlCommand(query, connection);
        //        SqlDataReader reader;
        //        reader = command.ExecuteReader();
        //        var columns = new List<string>();
        //        for (int i = 0; i < reader.FieldCount; i++)
        //        {
        //            columns.Add(reader.GetName(i));
        //        }
        //        while (reader.Read())
        //        {
        //            T obj = new T();
        //            foreach (var prop in obj.GetType().GetProperties())
        //            {
        //                try
        //                {
        //                    PropertyInfo propertyInfo = obj.GetType().GetProperty(prop.Name);
        //                    propertyInfo.SetValue(obj,
        //                        Convert.ChangeType(reader[prop.Name], propertyInfo.PropertyType), null);
        //                }
        //                catch
        //                {
        //                    continue;
        //                }
        //            }

        //            list.Add(obj);

        //        }
        //    }
        //    return list;
        //}
    }
}
