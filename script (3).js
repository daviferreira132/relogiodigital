function atualizarrelogio()(
  let agora = new Date()
  let horas = String(agora.getHours()).padStart(2, '0');
  let minutos = String(agora.getMinutes()).padStart(2, '0');
  let segundos = String(agora.getSeconds()).padStart(2, '0');
  
  ducument.getelementbyid('clock'),textcontent = '$(horas):$(minutes):$(segundos)';
}
 setinterval(atualizarRelogio, 1000);
 
 atualizarRelogio();