function load_data(data)
{
  /* alert('Data.csv');*/
  //split csv into array of row data
  var coordinate_data = data.split(/\r?\n|\r/);
  //start building html table
  var table_data = '<table class="table table-bordered table-striped">';
  var table_header_alphabet = 'xyzabcdefghijklmnopqrstuvw'; // support up to 26 dimensional coordinates
  var alphabet_size = table_header_alphabet.length;
  /*
    THIS HEADER IS UNNECESSARY from the POV of the assignment.
    AND FRAGILE; this is not optimal implementation. VERY FRAGILE.
    It assumes all rows of csv file will have the same amount of columns as the first row (hardcoded)
    and it assumes the number of variables indicate a coordinate will not exceed 26 (english alphabet -- hardcoded)
  */
  table_data += '<tr>'; // start building html row
  var coordinate_dimensions = coordinate_data[0].split(",").length; // will "guess" header length from length of row 0
  var i = 0; // header format: x  y  z  a ... v  w
  while( i < coordinate_dimensions && i < alphabet_size ) // short-circuit on length of row 0 or "give up" (BUG!) at end of alphabet
  {
    table_data += '<th>' + table_header_alphabet.charAt(i++) + '</th>';
  } //endwhile
  table_data += '</tr>' ;

  /* -- HTML TABLE of COORDINATE DATA  -- */

  console.log("rows="+coordinate_data.length);
  //for every row (i.e. for every coordinate)
  for(var count = 0; count < coordinate_data.length-1 ; count++)
  {
    //split row into x,y coordinate pair (most likely but could be x,y,z...N )
    var cell_data = coordinate_data[count].split(",");
    table_data += '<tr>'; // start building html row

    console.log("rowNum("+count+")::cell_count="+cell_data.length);
    //for every dimension (i.e. for x and y)
    for(var cell_count=0; cell_count < cell_data.length; cell_count++)
    {
      //table_data += '<td>'+cell_data[cell_count]+' cell_count='+cell_count+'</td>';
      table_data += '<td>'+cell_data[cell_count]+'</td>';
    }
    table_data += '</tr>';
  }
  table_data += '</table>';
  return table_data;
}
