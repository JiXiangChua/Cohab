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

@WebServlet("/getTasks")
public class GetTasksServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {
                String groupid = request.getParameter("groupid");
                JSONObject tasksObject = getGroupTasks(groupid);
                System.out.println("---------------------------------------->"+tasksObject);
                response.setContentType("application/json");
                response.setCharacterEncoding("UTF-8");
                response.getWriter().write(tasksObject.toString());
    }

    public JSONObject getGroupTasks(String groupid){
        Connection connection = null;
        Statement statement = null;
        ResultSet resultset = null;
        JSONObject tasksObject = new JSONObject();

        try{
            String sqlGetTasks = "SELECT a.*,b.fullname FROM cohab_db.task as a join cohab_db.user as b on a.hostid = b.id where a.groupid = "+ groupid;
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/cohab_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","root", "ziyi");
            statement = connection.createStatement();
            resultset = statement.executeQuery(sqlGetTasks);
    
            while(resultset.next()){
                tasksObject.put("id", resultset.getInt("taskid"));
                tasksObject.put("title", resultset.getString("title"));
                tasksObject.put("description", resultset.getString("description"));
                tasksObject.put("deadline", resultset.getString("deadline"));
                tasksObject.put("status", resultset.getString("status"));
                tasksObject.put("type", resultset.getString("type"));
                tasksObject.put("executorid", resultset.getInt("executorid"));
                tasksObject.put("hostid", resultset.getInt("hostid"));
                tasksObject.put("hostname", resultset.getString("fullname"));
                tasksObject.put("timestamp", resultset.getString("timestamp"));
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


