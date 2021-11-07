import java.util.*;
import javax.sql.DataSource;
import java.io.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import org.json.HTTP;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.JSONArray;
//test
@WebServlet("/getUser")
public class GetUserProfileServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {
                String groupid = request.getParameter("groupid");
            try{   
                JSONArray tasksObject = getGroupTasks(groupid);
                JSONObject mainObj = new JSONObject();
                mainObj.put("tasks", tasksObject);
                System.out.println("---------------------------------------->"+tasksObject);
                response.setContentType("application/json");
                response.setCharacterEncoding("UTF-8");
                response.getWriter().write(mainObj.toString());
            }
            catch (JSONException e) {
            // crash and burn
            throw new IOException("Error parsing JSON request string");
            }
    }

    public JSONArray getGroupTasks(String groupid){
        Connection connection = null;
        Statement statement = null;
        ResultSet resultset = null;
        JSONArray tasksObject = new JSONArray();

        try{
            String sqlGetTasks = "SELECT a.*,b.fullname FROM cohab_db.task as a join cohab_db.user as b on a.hostid = b.id where a.groupid = "+ groupid;
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/cohab_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","root", "ziyi");
            statement = connection.createStatement();
            resultset = statement.executeQuery(sqlGetTasks);
    
            while(resultset.next()){
                JSONObject taskObject = new JSONObject();
                taskObject.put("id", resultset.getInt("taskid"));
                taskObject.put("title", resultset.getString("title"));
                taskObject.put("description", resultset.getString("description"));
                taskObject.put("deadline", resultset.getString("deadline"));
                taskObject.put("status", resultset.getString("status"));
                taskObject.put("type", resultset.getString("type"));
                taskObject.put("executorid", resultset.getInt("executorid"));
                taskObject.put("hostid", resultset.getInt("hostid"));
                taskObject.put("createBy", resultset.getString("fullname"));
                taskObject.put("createAt", resultset.getString("timestamp"));
                tasksObject.put(taskObject);
            }
        
        }catch(Exception ex)
        {
            tasksObject = null;
            System.err.println(ex.getMessage());     
        }finally{
            if(resultset !=null) 
                try {
                    resultset.close();
                } catch (Exception ex) {
                    System.err.println(ex.getMessage()); 
                }
        
            if(statement !=null)
                try {
                    statement.close();
                } catch (Exception ex) {
                    System.err.println(ex.getMessage()); 
                }
        
            if(connection !=null)
                try {
                    connection.close();
                } catch (Exception ex) {
                    System.err.println(ex.getMessage()); 
                }    
        }
        return tasksObject;
    }
}


