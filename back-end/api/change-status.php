<?php

//salvo in una variabile il contenuto dell'elemento cliccato dall'utente
$clicked_element = $_POST['clickedElement'];

//trasformo il valore della chiave done in un booleano (perchè viene interpretato come stringa)
$clicked_element['done'] = boolval($clicked_element['done']);
//cambiando il tipo di dato in booleano, automaticamente viene settato come true, quindi metto un controllo che se il valore è true, lo trasforma in false
if($clicked_element['done'] == true){
    $clicked_element['done'] = false;
};

//cambio il valore booleano della chiave done
$clicked_element['done'] = !$clicked_element['done'];

//leggo il contenuto del file json
$json_todolist = file_get_contents('../data/todolist.json');

//trasformo il json in un array del php in modo tale che il php riesca a comprenderlo
$todolist_array = json_decode($json_todolist, true);

//salvo solo il contenuto dell'array degli elementi della to do in una variabile (così da poter successivamente inserire il nuovo elemento direttamente dentro di esso invece  che nell'array che contiene questo array)
$todolist = $todolist_array['toDoElements'];

//aggiungo all'array del file json l'oggetto del nuovo elemento inserito dall'utente
$todolist[] = $clicked_element;

//salvo nel json il nuovo array
$json_new_list = json_encode($todolist, true);

//avviso il browser che sta per riceve un file json
header('Content-Type: application/json');

//stampo la nuova lista di cose da fare dentro il file json (dopo aver cancellato tutti gli eventuali var_dump per evitare errori)
echo $json_new_list;
