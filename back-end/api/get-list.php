<?php

//header che fa capire che non si tratta di html ma di json
header('Content-Type: application/json');

//recurpero il contenuto dell file json che contiene la lista delle cose da fare
$json_list_content = file_get_contents('../data/todolist.json');

//stampo la lista delle cose da fare recuperate
echo $json_list_content;