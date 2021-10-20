<?php
   session_start();
   include('auth.php');
   ?>
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="/css/product.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/chosen/1.8.7/chosen.jquery.min.js"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/chosen/1.8.7/chosen.min.css">
      <title>Product</title>
   </head>
   <body>
      <div id="productForm" class="modal">
         <div class="modal-content">
            <div class="container">
               <h3>Manage Product</h3>
               <label for="search"><b>Search Jersey</b></label>
               <div id= "searches-container">
                  <div id="search-basedon-id-contianer">
                     <input id="search-input" type="number" min="1" placeholder="Search based On ID, Enter Jersey ID" name="search">
                     <button id="search-button" onclick="getDataByID(document.getElementById('search-input').value);"><i class="fa fa-search"></i></button>
                  </div>
                  <div id="search-basedon-name">
                     <P><b>OR</b></P>
                     <?php   $errors = array();
                        $result = mysqli_query($db, "SELECT * from jersey");
                        echo "<form id='search-container'>";
                        echo "<select id='searchdd' name='selectedItem' onchange='getDataByName(this.value);'>";
                        echo "<option>-- SELECT JERSEY NAME --</option>";
                        while($row = mysqli_fetch_array($result)){
                            echo "<option>$row[name]</option>";
                        }
                        echo "</select>";
                        echo "</form>";
                        mysqli_close($db);
                        include('errors.php');
                        ?>
                  </div>
               </div>
               <form action="product_action.php" method="post" enctype="multipart/form-data">
               <label for="jerseyid"><b>Jersey ID</b></label>
               <input type="number" name="jerseyid" id='jerseyid' placeholder="Read only" min="1" readonly><br>
               <label for="jerseyName"><b>Name</b></label><br>
               <input type="text" id='jerseyName' placeholder="Enter Jersey Name" name="jerseyName" required autofocus>
               <label for="jerseyPrice"><b>Price</b></label><br>
               <input type="number" placeholder="Enter Jersey price" name="jerseyPrice" id='jerseyPrice' min="1" required>
               <label for="jerseyImage"><b>Image</b></label><br>
               <input type="file" name="image">
               <label for="jerseyDesc"><b>Description</b></label><br>
               <textarea name="jerseyDesc" rows="3" id='jerseyDesc' style="width:100%;"></textarea>
               <?php   $errors = array();
                  include('connectdb.php');
                  $result = mysqli_query($db, "SELECT * from category");
                  echo "<div id='search-container'>";
                  echo "<select id='jerseyCategory' name='jerseyCategory' onchange='catSelected(this.value);' required>";
                  echo "<option>SELECT JERSEY CATEGORY</option>";
                  while($row = mysqli_fetch_array($result)){
                      echo "<option value='$row[id]'>$row[name]</option>";
                  }
                  echo "</select>";
                  echo "</div>";
                  mysqli_close($db);
                  include('errors.php');
                  ?>
               <div class="buttons-container">
                  <button type="submit" name='add_jersey'>Add</button>
                  <button type="submit" name='update_jersey'>Update</button>
                  <button class="special" type="submit" name='delete_jersey'>Delete</button>
                  <button class="special" type="submit" onclick="document.location.href='index_admin.php'" class="cancelbtn">Cancel</button>
               </div>
               </from>
            </div>
         </div>
      </div>
      <script src="js/product.js"></script>
   </body>
</html>