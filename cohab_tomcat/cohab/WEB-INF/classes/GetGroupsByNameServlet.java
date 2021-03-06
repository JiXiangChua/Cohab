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

@WebServlet("/getGroupsByName")
public class GetGroupsByNameServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {
                String groupname = request.getParameter("groupname");
                JSONObject groupObject = searchGroupByName(groupname);
                System.out.println("---------------------------------------->"+groupObject);
                response.setContentType("application/json");
                response.setCharacterEncoding("UTF-8");
                response.getWriter().write(groupObject.toString());
    }

    public JSONObject searchGroupByName(String groupname){
        Connection connection = null;
        Statement statement = null;
        ResultSet resultset = null;
        JSONObject groupObject = new JSONObject();

        try{
            String sqlGetGroup = "SELECT * FROM cohab_db.group WHERE groupname = '"+ groupname +"'";
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/cohab_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","root", "ziyi");
            statement = connection.createStatement();
            resultset = statement.executeQuery(sqlGetGroup);
    
            while(resultset.next()){
                groupObject.put("id", resultset.getInt("id"));
                groupObject.put("groupname", resultset.getString("groupname"));
                groupObject.put("description", resultset.getString("description"));
            }
        
        }catch(Exception ex)
        {
            groupObject = null;
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
        return groupObject;
    }
}


