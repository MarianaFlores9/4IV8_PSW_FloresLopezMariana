/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.*;
import javax.servlet.ServletConfig;

/**
 *
 * @author Alumno
 */
public class ConsultarAlumnos extends HttpServlet {

    /**
     * Para poder establecer una conexion con bs es necesario contar con 3 tipos
     * de objetos muy especificos los cuales son: Connection es el encargado de
     * establecer la conexion con el servidos BD Statement sirve para poder
     * definir y manipular los diferentes objetos de las querrys como por
     * ejemplo: create, delete, insert, update, drop, etc ResultSet el cual
     * sirve para poder realizar las consultadas a la BD
     *
     *
     */
    private Connection con;
    private Statement set;
    private ResultSet rs;

    //lo segundo se debe de tener el constructor
    public void init(ServletConfig scg) throws ServletException {
        //se debe de establecer los elementos para la conexion con db
        String url = "jdbc:mysql:8080//localhost/alumnos";
        //controlador:motorBD:puerto//IP/nombreBD
        String username = "root";
        String password = "floresM9";

        try {
            //intentar conectar a la bd
            Class.forName("com.mysql.jdbc.Driver");
            url = "jdbc:mysql://localhost/alumnos";
            con = DriverManager.getConnection(url, username, password);
            set = con.createStatement();

            System.out.print("Si conecto a la BD *w* ");

        } catch (Exception e) {
            System.out.println("No conecto, solo juguito contigo uwu");
            System.out.println(e.getMessage());
            System.out.println(e.getStackTrace());
        }
    }

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<meta https-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">");;
            out.println("<title>Tablas de Alumnos de Batiz</title>");
            out.println("<link rel=\"stylesheet\" href=\"css/style2.css\">");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Lista de Alumnos de Batiz</h1>"
                    + "<br>"
                    + "<table class=\"tabla\" border='2'>"
                    + "<tr>"
                    + "<th>Boleta</th>"
                    + "<th>Nombre del Alumno</th>"
                    + "<th>Telefono</th>"
                    + "</tr>");
            try {
                int bol;
                String nom, apellidopaterno, apellidomaterno, tel;

                //que tipo de querry voy a realizar
                String q = "select * from alumnobatiz";

                set = con.createStatement();
                rs = set.executeQuery(q);

                while (rs.next()) {
                    bol = rs.getInt("boleta");
                    nom = rs.getString("nombre");
                    apellidopaterno = rs.getString("appat");
                    apellidomaterno = rs.getString("apmat");
                    tel = rs.getString("telefono");

                    out.println("<tr>"
                            + "<td>" + bol + "</td>"
                            + "<td>" + nom + " " + apellidopaterno + " " + apellidomaterno + "</td>"
                            + "<td>" + tel + "</td>"
                            + "</tr>");

                    System.out.println(rs);
                }

                rs.close();
                set.close();

            } catch (Exception e) {
                System.out.println("Error al conectar la tabla  T_T");
                System.out.println(e.getMessage());
                System.out.println(getStackTrace());
            }
            out.println("</table>"
                    + "<br>"
                    + "<a href='index.html'>Regresar a Principal</a>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

    public void destroy() {
        try {
            con.close();
        } catch (Exception e) {
            super.destroy();
        }
    }

    private boolean getStackTrace() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
}
