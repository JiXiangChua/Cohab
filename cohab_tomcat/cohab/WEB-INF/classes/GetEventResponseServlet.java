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

@WebServlet("/getEventResponse")
public class GetEventResponseServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {
                String eventid = request.getParameter("eventid");
                JSONObject eventResObject = getEventRes(eventid);
                System.out.println("---------------------------------------->"+eventResObject);
                response.setContentType("application/json");
                response.setCharacterEncoding("UTF-8");
                response.getWriter().write(eventResObject.toString());
    }

    public JSONObject getEventRes(String eventid){
        Connection connection = null;
        Statement statement = null;
        ResultSet resultset = null;
        JSONObject eventResObject = new JSONObject();

        try{
            String sqlGetEventRes = "SELECT a.status,b.fullname,b.profileimage,b.username,b.gender FROM cohab_db.eventresponce as a join cohab_db.user as b on a.userid=b.id where eventid = "+eventid;
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/cohab_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","root", "ziyi");
            statement = connection.createStatement();
            resultset = statement.executeQuery(sqlGetEventRes);
    
            while(resultset.next()){
                eventResObject.put("status", resultset.getString("status"));
                eventResObject.put("fullname", resultset.getString("fullname"));
                eventResObject.put("profileimage", resultset.getString("profileimage"));
                eventResObject.put("username", resultset.getString("username"));
                eventResObject.put("gender", resultset.getString("gender"));
            }
        
        }catch(Exception ex)
        {
            eventResObject = null;
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
        return eventResObject;
    }
}


