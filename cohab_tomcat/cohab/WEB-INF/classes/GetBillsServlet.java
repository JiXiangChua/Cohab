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

@WebServlet("/getBills")
public class GetBillsServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {
                String groupid = request.getParameter("groupid");
                String userid = request.getParameter("userid");
                JSONObject roomBillsObject = getBillsById(groupid,userid);

                System.out.println("---------------------------------------->"+roomBillsObject);
                response.setContentType("application/json");
                response.setCharacterEncoding("UTF-8");
                response.getWriter().write(roomBillsObject.toString());
    }

    public JSONObject getBillsById(String groupid, String userid){
        Connection connection = null;
        Statement statement = null;
        ResultSet resultset = null;
        JSONObject billsObject = new JSONObject();

        try{
            String sqlGetBills = "SELECT a.status, a.timestamp, b.portion,b.totalamt,b.description, c.username, c.profileimage FROM cohab_db.billstatus AS a JOIN cohab_db.bill AS b ON a.billid = b.billid JOIN cohab_db.user AS c ON c.id = b.userid WHERE a.userid = "+ userid +" AND b.groupid = "+groupid;
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/cohab_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","root", "ziyi");
            statement = connection.createStatement();
            resultset = statement.executeQuery(sqlGetBills);
    
            while(resultset.next()){
                billsObject.put("status", resultset.getInt("status"));
                billsObject.put("totalamt", resultset.getInt("totalamt"));
                billsObject.put("description", resultset.getString("description"));
                billsObject.put("creditor", resultset.getString("username"));
                billsObject.put("profileimage", resultset.getString("profileimage"));
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


