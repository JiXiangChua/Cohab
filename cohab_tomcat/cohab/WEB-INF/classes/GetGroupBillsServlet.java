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

@WebServlet("/getGroupBills")
public class GetGroupBillsServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {
                String groupid = request.getParameter("groupid");
                JSONObject groupBillsObject = getGroupBillsById(groupid);

                System.out.println("---------------------------------------->"+groupBillsObject);
                response.setContentType("application/json");
                response.setCharacterEncoding("UTF-8");
                response.getWriter().write(groupBillsObject.toString());
    }

    public JSONObject getGroupBillsById(String groupid){
        Connection connection = null;
        Statement statement = null;
        ResultSet resultset = null;
        JSONObject billsObject = new JSONObject();

        try{
            String sqlGetBills = "SELECT * FROM cohab_db.bill where type = 'group' and groupid = "+groupid;
            //String sqlGetBills = "SELECT a.status, a.timestamp, b.portion,b.totalamt,b.type,b.description, c.username FROM cohab_db.billstatus AS a JOIN cohab_db.bill AS b ON a.billid = b.billid JOIN cohab_db.user AS c ON c.id = b.userid WHERE a.userid = "+ userid +" AND b.groupid = "+groupid+" and b.type = 'group'";
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/cohab_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","root", "ziyi");
            statement = connection.createStatement();
            resultset = statement.executeQuery(sqlGetBills);
    
            while(resultset.next()){
                //billsObject.put("status", resultset.getInt("status"));
                billsObject.put("totalamt", resultset.getInt("totalamt"));
                billsObject.put("description", resultset.getString("description"));
                billsObject.put("portion", resultset.getInt("portion"));
            }
        
        }catch(Exception ex)
        {
            billsObject = null;
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
        return billsObject;
    }
}


