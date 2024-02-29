<?php

//salvo l'oggetto composto dal tezt inserito dall'utente e dalla chiave done falsa come da default, ottenute da una richiesta axios in post, in una variabile
$newElement = $_POST['newElement'];
//trasformo il valore della chiave done in un booleano (perchè viene interpretato come stringa)
$newElement['done'] = boolval($newElement['done']);
//cambiando il tipo di dato in booleano, automaticamente viene settato come true, quindi metto un controllo che se il valore è true, lo trasforma in false
if($newElement['done'] == true){
    $newElement['done'] = false;
};


//leggo il contenuto del file json
$json_todolist = file_get_contents('../data/todolist.json');

//trasformo il json in un array del php in modo tale che il php riesca a comprenderlo
$todolist_array = json_decode($json_todolist, true);

//salvo solo il contenuto dell'array degli elementi della to do in una variabile (così da poter successivamente inserire il nuovo elemento direttamente dentro di esso invece  che nell'array che contiene questo array)
$todolist = $todolist_array['toDoElements'];

//aggiungo all'array del file json l'oggetto del nuovo elemento inserito dall'utente
$todolist[] = $newElement;

//salvo nel json la il nuovo array
$json_new_list = json_encode($todolist, true);

//avviso il browser che sta per riceve un file json
header('Content-Type: application/json');

//stampo la nuova lista di cose da fare dentro il file json (dopo aver cancellato tutti gli eventuali var_dump per evitare errori)
echo $json_new_list;