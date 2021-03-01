document.getElementById("myHead").innerHTML =
"<meta http-equiv='X-UA-Compatible' content='IE=edge'>"
+"<meta name='viewport' content='width=device-width, initial-scale=1.0'>"
+"<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm' crossorigin='anonymous'>"
+"<style>.navbar-dark .navbar-nav .nav-link {color: rgb(0, 0, 0);}.navbar-dark .navbar-nav .active>.nav-link { color: rgb(0, 0, 0);}</style>"
+"<title> JavaScritp</title>";
document.getElementById("myNav").innerHTML =
"<nav class='navbar navbar-expand-lg navbar-dark bg-primary bg-warning ' >  "
+"<a class='navbar-brand text-dark ' href='#'> JavaScript</a>"
+"<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'><span class='navbar-toggler-icon'></span></button>"
+"<div class='collapse navbar-collapse' id='navbarNavDropdown'>"
+"<ul class='navbar-nav'>"
+"<li class='nav-item active'> <a class='nav-link' href='#'>Inico <span class='sr-only'>(current) </span></a></li>"
+"<li class='nav-item'><a class='nav-link' href='#'>Variables </a></li>"
+"<li class='nav-item'><a class='nav-link' href='#'>Ciclos</a></li>"
+"<li class='nav-item'> <a class='nav-link' href='#'>Condicionales</a></li>"
+"<li class='nav-item dropdown '> "
+"<a class='nav-link dropdown-toggle' href='#' id='navbarDropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Temas</a>"
+"<div class='dropdown-menu bg-warning' aria-labelledby='navbarDropdownMenuLink '>"
+"<a class='dropdown-item' href='#'>HTML</a>"
+"<a class='dropdown-item' href='#'>CSS</a> "
+"<a class='dropdown-item' href='#'>JS</a> "
+"</div></li></ul></div> </nav"
document.getElementById("myFooter").innerHTML =
"<p id='copyright'>Copyright &copy; " + new Date().getFullYear() + " Armand 🧑🏻‍💻</p>"
	+ "<p id='credits'>Layout by Armand </p>"
	+ "<p id='contact'><a href='mailto:armndove@live.com'>Contacto </a> </p> "
	+ "<a href='mailto:armandove@live.com'>Reportar un problema,bug.</a></p>";
	/* +"<script src='https://code.jquery.com/jquery-3.2.1.slim.min.js' integrity='sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN' crossorigin='anonymous'></script>"
+"<script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js' integrity='sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q' crossorigin='anonymous'></script>"
+"<script src=`https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' integrity='sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl' crossorigin='anonymous'></script>"
 */
hereDoc= `
                                                               ..                           
                                                              cK.                          
.;;;. ;:.  .:;..;  ., .;;;..;    .;.    .;;,   ';;,     ,:'  .xd.  ';,.  .;   ,:;.  .:;.  
kN00'xXOx 'NXKxlM. :N.dW0O'lM.   kMk    lMKXX, NXOO.   xW0N.cWKKW: XN0Nx ;M. ONOK0 cW0KW: 
kx   Xd   O0  .lM. :N.xK   lM.  .NKW.   lM. OK.No     :M: ..Nk  OK.Xx ;W:;M.lN.  ..No  OK 
kXOd xWO'.Nl   lM. :N.xWOx lM.  cK,Ml   lM. :W'NXOl   xN.  'M;  cN.Xx  Kd;M.Ox odc,M'  cN.
k0;,  :KX.Xo   lM. :N.xX;, lM.  O0lN0   lM. cW.Nk;'   dN.  ,M;  lX.Xx  Xo;M.Ok lKK;M'  lX 
kx  ., oN.OK..':Ml xK xK.  lM,..WOx0W'  lM,'KO.Nd     :Mo.,'NO..Kk Xx.lW,;M.lW; xK.Nx..Kk 
kWNNcXXNo .KWNo kWNN; dMNN,cMWW0X  .Nl  cMNNO. XWNX.   oWNX.cNNWK. KWNXl ;M. xWNWO cNNWK. 
.... .'.    '.   .'.   ...  .....   ..   ...   ....     .'.   ..   ...    .   .'.   .'.  
              ...                                                                                
             ......                                                                               
             ......                      ..                                                       
.;:ccc:,.     .....  ':::.           ';cllc:,.      ';cccc;'.      .,,;:cccc.   .,:cccc:'         
.lOOOOOOOOkl.  ;;,c.  lOOk,         ,xOOOOOOOOx.   ,xOOOOOOOOx'   .coooodxxOO;' ckOOOOOOOOd.       
:OOOdc:oOOOk,  :llo.  lOOk,        .kOOOo:cxOOOl   dOOOo:cxOOOl   cooo:;;;;;;o0kOOOkl:lxOOO:       
lOOk,  .xOOO,  :ooo.  lOOk,        .OOOk.  'OOOo  .xOOx.  ;OOOo  .oooc       cK0OOOd.  ,ddd;       
lOOk, .,dOOO,  :ooo.  lOOk,        .OOOk.  'OOOo  .xOOx.  ,OOOo  .oooc         .dOOd        ...    
lOOk, .,dOOO,  :ooo.  lOOk,        .OOOk.  'OOOo  .xOOx.  ,OOOo  .oooc.        .:xkd.     .:lcc.   
lOOkc;;oxdxk.  :ooo.  lOOk,        .OOOk::lxOOOo  .xOOk;;lx0kd;  .oo;.,:ccc'   'l;cddl;'..clcll.   
lOOkxkxdooll   :ooo.  lOOk,        .OOOOOOOOOOOo  .xOOOOOOOd,;.  .l,   ;ooo;    ,,.lkOOOkkdlc:;'.. 
lOOdoo;'..;l   :ooo.  lOOk, .      .OOOOxl:cOOOo  ,kOOOxokOc ..  .,'   ...'.      .';cdkOOkl,''... 
lOx,;,.  .::.  :ooo.  lOOk;lo      .OOOk.  'OOOo .;kOOx. lOl,,   .oocc.           ':.  cOOOo'..''. 
lkol,,   .oo.  :ooo.  lOOklOO.     .OOOk.  'OOOo  ;xOOx. 'kxxx'  .ooOXOc  ...  ..';:'  ;OOOo..'',  
lkkOkk,  ,k0.  :ooo.  lOOOldxl,.   .OOkk.  'OOOd..:oOOx.  lxxxl  .ooO0k, .::.  ,kkc:'  :OOOo,;:ldl.
lkdo,..  ....  :ooo.  ;OOOkkkxdxo. ,koox.  'OOOk:':xOOx.  .oxdx,  cokxklllooc. .kOc'ldxkOOkxdddddd.
lkkO,.    .   .:ooo.   ;dkOOkddkx. :XXKK,  'Okxo..,xOOx.   ;kxkd. .:ddxdooool.  'lc:lkOOxdxkkkxd:. 
....            ...      ...''.,.  .ccc:.   ...........    .....     .......       .....  .....         
`

console.log(hereDoc);