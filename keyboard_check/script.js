const insert=document.getElementById('insert');

window.addEventListener('keydown',(e)=>{
    insert.innerHTML=`
    <div id='color'><table>
  <tr>
    <td>Key</td>
    <td>keyCode</td>
    <td>code</td>
  </tr>
  <tr>
    <td>${e.key==' '?'Space':e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table><\div>
    `;
});