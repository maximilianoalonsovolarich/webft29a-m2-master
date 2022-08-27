const showFriends = () => {
  let lista = $("#lista");
​
  $.get("http://localhost:5000/amigos", (friends) => {
    lista.empty();
    friends.forEach((friend) => lista.append(`<li>${friend.name}</li>`));
  });
};
​
$("#boton").click(showFriends);
​
$("#search").click(() => {
  let input = $("#input");
  let id = input.val();
​
  $.get(`http://localhost:5000/amigos/${id}`, (friend) => {
    $("#amigo").text(friend.name);
    input.val("");
  });
});
​
$("#delete").click(() => {
  let input = $("#inputDelete");
  let id = input.val();
​
  $.ajax({
    url: `http://localhost:5000/amigos/${id}`,
    method: "DELETE",
    success: () => {
      $("#success").text("Amigo " + id + " eliminado con éxito");
      input.val("");
      showFriends();
    },
  });
});