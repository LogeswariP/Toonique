<!DOCTYPE html>
<html>
<head>
<script>
function find()
{
var r,sum=0;
var x=document.forms["myform"]["num"].value;
while(x>0)
{
r=x%10;
sum=sum+r;
x=x/10;
}
document.getElementById('num').innerHTML=sum;
}
</script>
</head>
<body>
<p id="num"></p>SUM OF THE DIGITS
<form method="post" onsubmit="find()" name="myform">
ENTER THE NUMBER:<input type="number" name="num">
<button type="submit">SUBMIT</button>
</form>
</body>
</html>
