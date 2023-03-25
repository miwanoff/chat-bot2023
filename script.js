$(function () {
  const phrases = [
    "Наш менеджер перезвонит Вам в ближайшее время!",
    "Уточнить детали можно по телефону 123456789",
    "Оставайтесь на связи!",
    "Сегодня прекрасная погода!",
    "С Вами очень приятно общаться!",
  ];

  const hello = "Hello!";
  const goodbye = "Good Bye!";
  //   $("h2").css("color", "red");

  $("#chatbot").click(function () {
    $(this).toggleClass("show");
  });

  $("#answers").append(`<div class="bot_answ">${hello}</div>`);

  $("#answers").click(function () {
    return false; // preventDefault and stopPropagation()
  });

  $("#question").click(function () {
    return false; // preventDefault and stopPropagation()
  });

  $("#ok").click(function () {
    let q = $("#question").val().trim();
    $("#question").val("");
    $("#answers").append(`<div class="human_answ">${q}</div>`);
    $("#answers").append(`<div class="bot_answ">${goodbye}</div>`);
    return false; // preventDefault and stopPropagation()
  });
});
