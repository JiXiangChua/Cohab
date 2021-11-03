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

@WebServlet("/getEvents")
public class GetEventsServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {
                String groupid = request.getParameter("groupid");
                String userid = request.getParameter("userid");
                JSONObject eventsObject = getGroupEvents(groupid,userid);
                System.out.println("---------------------------------------->"+eventsObject);
                response.setContentType("application/json");
                response.setCharacterEncoding("UTF-8");
                response.getWriter().write(eventsObject.toString());
    }

    public JSONObject getGroupEvents(String groupid,String userid){
        Connection connection = null;
        Statement statement = null;
        ResultSet resultset = null;
        JSONObject eventsObject = new JSONObject();

        try{
            String sqlGetEvents = "SELECT a.eventid,a.title,a.description,a.dateTime,a.location,b.profileimage,c.status FROM cohab_db.event as a join cohab_db.user as b on a.hostid = b.id join cohab_db.eventresponce as c on a.eventid = c.eventid where c.userid = "+userid+" and a.groupid = "+groupid+" order by dateTime desc";
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/cohab_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","root", "ziyi");
            statement = connection.createStatement();
            resultset = statement.executeQuery(sqlGetEvents);
    
            while(resultset.next()){
                eventsObject.put("id", resultset.getInt("eventid"));
                eventsObject.put("title", resultset.getString("title"));
                eventsObject.put("description", resultset.getString("description"));
                eventsObject.put("dateTime", resultset.getString("dateTime"));
                eventsObject.put("location", resultset.getString("location"));
                eventsObject.put("status", resultset.getString("status"));
                eventsObject.put("profileimage", resultset.getString("profileimage"));
            }
        
        }catch(Exception ex)
        {
            eventsObject = null;
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
        return eventsObject;
    }
}


