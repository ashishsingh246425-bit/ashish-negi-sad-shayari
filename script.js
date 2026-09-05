
function copyShayari(){
  const el=document.getElementById('poem');
  const text=el.innerText;
  navigator.clipboard.writeText(text).then(()=>alert('Shayari copy ho gayi ❤️'));
}
function shareShayari(){
  const text=document.getElementById('poem').innerText;
  if(navigator.share) navigator.share({title:document.title,text:text,url:location.href});
  else navigator.clipboard.writeText(location.href).then(()=>alert('Page link copy ho gaya ❤️'));
}
function searchCards(){
  const q=document.getElementById('search').value.toLowerCase().trim();
  document.querySelectorAll('.card').forEach(c=>c.style.display=c.innerText.toLowerCase().includes(q)?'block':'none');
}
