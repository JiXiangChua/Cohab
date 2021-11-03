import java.util.*;
import javax.sql.DataSource;
import java.io.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.text.ParseException;
import org.json.HTTP;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.JSONArray;

@WebServlet("/deleteChore")
public class DeleteChoreServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {
            String choreid = request.getParameter("choreid");
           
            try{
                String status = deleteChore(choreid);
                JSONObject jObject = new JSONObject();
                jObject.put("status", status);
                System.out.println("---------------------------------------->"+jObject);
                response.setContentType("application/json");
                response.setCharacterEncoding("UTF-8");
                response.getWriter().write(jObject.toString());
            }
            catch (JSONException e) {
                // crash and burn
                throw new IOException("Error parsing JSON request string");
            }
    }

    public String deleteChore(String choreid){
        Connection connection = null;
        Statement statement = null;
        ResultSet resultset=null;
        PreparedStatement preparedStatement =null;
        String status = "OK";

        try{
            String sqlDeleteChoreSeq = "Delete from cohab_db.choreseq where choreid = "+choreid;
            String sqlDeleteChore = "Delete from cohab_db.chore where choreid = "+choreid;
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/cohab_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","root", "ziyi");
            preparedStatement=connection.prepareStatement(sqlDeleteChoreSeq);
            preparedStatement.executeUpdate();

            preparedStatement=connection.prepareStatement(sqlDeleteChore);
            preparedStatement.executeUpdate();


        }catch(Exception ex)
        {
            status = "NOK";
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
        return status;
    }
}


