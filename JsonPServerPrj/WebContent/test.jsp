<%@ page language="java" contentType="text/javascript" %>

<%
response.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
String callback=request.getParameter("callback");
out.println(callback+"(");
%>
{
"id":1,
"name":"Arvind"
}
<%
out.println(")");
%>
