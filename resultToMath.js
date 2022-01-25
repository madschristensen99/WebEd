/*

first loop if/else statement if it is a word we want, we change it and add it to math list. 

This allows us to do the sorting first, and focus on making good stuff better rather than focusing on throwing out bad stuff. Bad stuff will either now matter anyway so why let it get in the way of your good stuff. 


first and second loop will be same loop, in if elseif else setup. 

*/




function resultToMath (math_str, ElementName){

        // starting stuff turns input stream into output through input String

        // run through list of words. If it is authorized, it gets passed to a new list

        math_split = math_str.split(" ");

        math_list = ["\\[{"];

        // Middle stuff turns the input into an output

        // First loop runs through input and fomats so that everything works and is indepepndt

        // filterAndFormat

        for (i = 0; i < math_split.length; i ++){

                math_split [i] = math_split [i].toLowerCase();

               if (math_split [i].includes("1") || 

                   math_split [i].includes("2") ||

                   math_split [i].includes("3") ||

                   math_split [i].includes("4") ||

                   math_split [i].includes("5") ||

                   math_split [i].includes("6") ||

                   math_split [i].includes("7") ||

                   math_split [i].includes("8") ||

                   math_split [i].includes("9") ||

                   math_split [i].includes("0") ||

                   math_split [i] === "x" ||

                   math_split [i] === "y" ||

                   math_split [i] === "z" ||

                   math_split [i] === "u" ||

                   math_split [i] === "v" ||

                   math_split [i] === "a" ||

                   math_split [i] === "b" ||

                   math_split [i] === "c" ||

                   math_split [i] === "ac" ||

                   math_split [i] === "du" ||

                   math_split [i] === "dv" ||

                   math_split [i] === "x" ||

                   math_split [i] === "+" || 

                   math_split [i] === "-" || 

                   math_split [i] === "/" || 

                   math_split [i] === "(" ||

                   math_split [i] === ")" ||

                   math_split [i] === "vertical" ||

                   math_split [i] === "parts" ||

                   math_split [i] === "long"


                   ){
                        math_list.push(math_split [i])

                }

                else if (math_split [i] === "equals"){

                        math_list.push("}={");

                }

                else if (math_split [i] === "plus"){

                        if (math_split [i + 1] === "minus" || math_split [i + 1] === "-"){

                                math_list.push("\\pm");

                                math_split [i + 1] = "";

                        }

                        else if (math_split [i  + 2] === "minus" & math_split [i + 1] === "or"){

                                math_list.push ("\\pm");

                                math_split [i + 2] = "";

                        }

                        else {

                                math_list.push ("+");

                        }

                }

                else if (math_split [i] === "negative" || math_split [i] === "minus" ){

                        if (i < math_list.length - 1){

                                math_list [i + 1] = "-" + math_list [i + 1];

                        }

                        else {

                                math_list.push("-");

                        }

                }

                else if (math_split [i] === "times" || math_split [i] === "*"){

                        math_list.push("\\times");

                }

                else if (math_split [i] === "squared"){

                        math_list [math_list.length - 1] += "^2";

                }

                else if (math_split [i] === "cubed"){

                        math_list [math_list.length - 1] += "^3";

                }

                // needs to add onto last word unless there is equals or a bracket is placed. 

                else if (math_split [i] === "over" || math_split [i] === "divided" || math_split [i] === "/"){

                        math_list.push("\\over{}");

                }

                else if (math_split [i] === "integral"){

                        math_list.push("\\int");

                }
                
                
                else if (math_split [i] === "sum"){
                    
                        math_list.push ("\\sum{}");
                }

                else if (math_split [i] === "natural"){
                    
                        math_list.push ("\\ln{}");
                }

                else if ((math_split [i] === "log" || math_split [i] === "logarithm") & math_split [i - 1] != "natural"){
                    
                        math_list.push ("\\log{}");
                }

                else if (math_split [i] === "be"){

                        math_list.push("b");

                }

                else if (math_split [i] === "you"){

                        if (math_split [i - 1] === "do"){

                                math_list.push ("du");

                        }

                        else {

                                math_list.push("u");

                        }

                }

                else if (math_split [i] === "one"){

                        math_list.push("1");

                }

                else if (math_split [i] === "for"){

                        math_list.push("4");

                }

                else if (math_split [i] === "two"){

                        math_list.push("2");

                }

                else if (math_split [i] === "three"){

                        math_list.push("3");

                }

                else if (math_split [i] === "four"){

                        math_list.push("4");

                }

                else if (math_split [i] === "five"){

                        math_list.push("5");

                }

                else if (math_split [i] === "six"){

                        math_list.push("6");

                }

                else if (math_split [i] === "seven"){

                        math_list.push("7");

                }

                else if (math_split [i] === "eight"){

                        math_list.push("8");

                }

                else if (math_split [i] === "nine"){

                        math_list.push("9");

                }

                else if (math_split [i] === "zero"){

                        math_list.push("0");

                }

               else if (math_split [i] === "sine"){

                        math_list.push("\\sin{}");

                }

                else if (math_split [i] === "cosine"){

                        math_list.push("\\cos{}");

                }

                else if (math_split [i] === "power" || math_split [i] === "exponent"){

                        math_list [math_list.length - 1] += "^{}";

                }
                else if (math_split [i] === "to"){

                        math_list.push("2");

                }

                else if (math_split [i] === "line" || math_split [i] === "break" || math_split [i] === "brake"){

                        math_list.push("}\\]\\[{");

                }

                else if (math_split [i] === "root"){

                        if (math_split [i - 1] === "square"){

                                math_list.push("\\sqrt{}");

                        }

                        else {

                            math_list.push("root");

                        }

                }
                else if (math_split [i] === "hate" ||
                         math_split [i] === "hey"){
                        math_list.push("8");
                }

                else if (math_split === "clear"){
                        math_list = [];
                }

        }

        // makes formatting easier, combines array elements so that pieces can be moved together easily

        for (i = 0; i < math_list.length; i ++){

                if (math_list [i] === "\\sqrt{}"){

                        // run through everything, if there is a reason for it to stop, it stops. Resons: over, equals

                        

                        for (j = i + 1; j < math_list.length; j ++){

                                if (math_list [j].includes("over")){

                                        break;

                                }

                                else {

                                        math_list [j - 1] = math_list [j - 1].substring (0, math_list [j - 1].length - 1);

                                        math_list [j] += "}";

                                }

                        }

                }

                // exponent is probalby going to need to be altered to run first, differnelty than cosine and sine. 

                else if ((math_list [i] === "\\sin{}" ||

                          math_list [i] === "\\cos{}"  ||

                          math_list [i] === "^{}")     &

                         i + 1 < math_list.length){

                        math_list [i]= math_list [i].substring (0, math_list [i].length - 1) + math_list [i + 1] + "}"

                        math_list [i + 1] = "";

                }

       }


        // second loop is for words that interact with other stuff, they move numbers and signs around least to most significant

        for (i = 0; i < math_list.length; i ++){

                // TODO: "include" feature

                // TODO: root for all following numbers

                // parts

                if (math_list [i] === "parts"){

                        math_list [i] = "";

                        // form array for u= v= du= dv= 

                        parts_arr = ["u = ", "", "\\phantom {00}", "dv = ", "", "\\\\",

                                     "du = ", "", "\\phantom {00}", "v = ", "",

                                     "}\\]\\[{"]

                        // if following words in math_list fit in, adds to cooresponding array elemnt

                        

                        for (j = i + 1; j < math_list.length; j ++){

                                if (math_list [j] === "u" || math_list [j] === "you"){

                                        math_list [j] = "";

                                        for (k = j + 1; k < math_list.length; k ++){

                                                if (math_list [k] !== "}={"){

                                                        parts_arr [1] += math_list [k];

                                                        math_list [k] = "";

                                                        break;

                                                }

                                                else {

                                                        math_list [k] = "";

                                                }

                                        }

                                }

                                if (math_list [j] === "dv"){

                                        math_list [j] = "";

                                        for (k = j + 1; k < math_list.length; k ++){

                                                if (math_list [k] !== "}={"){

                                                        parts_arr [4] += math_list [k];

                                                        math_list [k] = "";

                                                        break;

                                                }

                                                else {

                                                        math_list [k] = "";

                                                }

                                        }

                                }

                                if (math_list [j] === "du"){

                                        math_list [j] = "";

                                        for (k = j + 1; k < math_list.length; k ++){

                                                if (math_list [k] !== "}={"){

                                                        parts_arr [7] += math_list [k];

                                                        math_list [k] = "";

                                                        break;

                                                }

                                                else {

                                                        math_list [k] = "";

                                                }

                                        }

                                }

                                if (math_list [j] === "v"){

                                        math_list [j] = "";

                                        for (k = j + 1; k < math_list.length; k ++){

                                                if (math_list [k] !== "}={"){

                                                        parts_arr [10] += math_list [k];

                                                        math_list [k] = "";

                                                        break;

                                                }

                                                else {

                                                        math_list [k] = "";

                                                }

                                        }

                                }

                        }

                        

                        // turns phrase "parts" into string

                        math_list [i] = parts_arr.toString().replace(/,/g , " ") 

                                        + "\\\\" + parts_arr [1] + parts_arr [10] + "-" + "\\int{" + parts_arr [10] + parts_arr [7] + "}";

                }

                // runs through them all one by one. If a number, put in next slot. If other keyword, do other stuff. Else, do nothing make it "".

                // Key for long division

                // BUG:  issue with last bit of code - doesnt align at the ed because of an extra phantom zero

                // works will if you can go number by nmber but some transcribers combine numbers - so phrase "nine six" is pt in as "96", even though ninety six it a different word in this context. 

                // needs to add hboxes for formatting so that work is shown. Just needs to be done usig the sle if loops - try not to mess up base use of only number going one by one. 

                // side statemnt and editing such that one can figure out where they went wrong by going back at their work easier and fixing it. Would get people used to voice controlled interfaces which would be nice for spreadsheets, furue AIs to learn from. 

                

                else if (math_list [i] === "long"){

                        math_list [i] = "";

                        long_division_arr = ["\\require\{enclose\} \\begin{array}{rll}", "\\\\[-3pt]", 

                                             "\\enclose{longdiv}{", "", "}\\kern-.2ex"];

                        spot = 0;

                        for (j = i + 1; j < math_list.length; j ++){

                                // dont need to code anything else, goes, bring - they are just words i can use in the turorial they dont actually need to mean anything. but they will be useful for dding hboxes for explanations

                                if (isNumber(math_list [j])){

                                        phantom_length = long_division_arr [3].length - 2 - Math.floor (spot / 4);

                                        phantom_str = "";

                                        for (k = 0; k < phantom_length; k ++){

                                                phantom_str += "0";

                                        }

                                        // place into division array

                                        // first one is dividend

                                        if (spot == 0){

                                                long_division_arr [3] += math_list [j];

                                                spot ++;

                                                math_list [j] = "";

                                        }

                                        // second is divisor

                                        else if (spot == 1){

                                                // slice to be right before \enclose

                                                long_division_arr [1] += math_list [j];

                                                spot ++;

                                                 math_list [j] = "";

                                        }

                                        // third is part of answer, goes up top, remember index

                                        else if (spot % 4 == 2){

                                                // slice to be right after {rll}

                                                long_division_arr [0] += math_list [j];

                                                spot ++;

                                                math_list [j] = "";

                                        }

                                        // fourth is addition of guy below, product of top and divisor

                                        else if (spot % 4 == 3){

                                                // slice to be underlined, \underline{4\phantom{00}}

                                                // the aignment is related to the length of the dividend, meaning phantom{} will have to be used depended on that for better alignment. 

                                                long_division_arr.push("\\\\[-3pt] \\underline{" + math_list [j] + "\\phantom{" + phantom_str + "}} \\\\[-3pt]");

                                                spot ++;

                                                math_list [j] = "";

                                        }

                                        // 5 result of subracting guy

                                        else if (spot % 4 == 0){

                                                // next line include at start

                                                long_division_arr.push(math_list [j]);

                                                long_division_arr.push("\\phantom{" + phantom_str + "}");

                                                // causes  bug where last thing doesnt align but we can work on this, not fatal

                                                long_division_arr.push ("\\phantom{0}");

                                                spot ++;

                                                math_list [j] = "";

                                        }

                                        // 6 bring

                                        else if (spot % 4 == 1){

                                                long_division_arr.pop();

                                                // place after number in spot 5

                                                long_division_arr [long_division_arr.length - 2] += math_list [j];

                                                spot ++;

                                                math_list [j] = "";

                                        }

                                        // 7 goes up top

                                        // 8 product same as spot 3

                                        // 9 subtraction answer same as 4

                                        // 10 bring same as 5

                                        // 11 "goes" up top same as 6

                                }

                                else if (math_list [j] === "}\\over{}"){

                                        // include details, add to list

                                }

                                else {

                                        math_list [j] = "";

                                }

                        }

                        long_division_arr.push ("\\end{array}");

                        // for unknown reason, mathjax doesnt work with this code the first time run, gives error.

                        //math_list [i] 

                        str = long_division_arr.toString()

                        math_list [i] = str.replace(/,/g , " ");

/*

                        $$

\require{enclose}

\begin{array}{rll}

    125 && \hbox{(Explanations)} \\[-3pt]

   4 \enclose{longdiv}{500}\kern-.2ex \\[-3pt]

      \underline{4\phantom{00}} && \hbox{($4 \times 1 = 4$)} \\[-3pt]

      10\phantom{0} && \hbox{($5 - 4 = 1$)} \\[-3pt]

      \underline{\phantom{0}8\phantom{0}} && \hbox{($4 \times 2 = 8$)} \\[-3pt]

      \phantom{0}20 && \hbox{($10 - 8 = 2$)} \\[-3pt]

      \underline{\phantom{0}20} && \hbox{($4 \times 5 = 20$)} \\[-3pt]

      \phantom{00}0

  \end{array}

$*/

                }

                // Gotta figure out how to add right signs so that they fit well - looks more simple than with division, as alignment not as key as far as i can tell. 

                

                else if (math_list [i] === "vertical"){

                        math_list [i] = "";

                        // "make" needs to be added to approved math words for this to have any reason to exist

                        if (math_list [i - 1] === "make" & i > 3){

                                math_list [i] = "\\begin{align}" +

                                                 math_list [i - 4] + "& \\\\" +

                                                "\\underline{+\\quad " + math_list [i - 3] + "}& \\\\" + /*in this line need to change quad to be math_list [i -3] equivalent*/

                                                 math_list [i - 2] + "&" +

                                                "\\end{array}";

                        }

                        // live action

                        else {

                                vertical_arr = ["\\begin{align}"];

                                for (j = i + 1; j < math_list.length; j ++){

                                        operation = "";

                                        // If number, place under number that already exists.

                                        if (isNumber(math_list [j])){

                                              vertical_arr.push(math_list [j] + "\\\\");  

                                        }

                                        // TODO: Make use of signs better so it shows up

                                        else if (math_list [j] === "plus"){

                                                operation = "plus";

                                        }

                                        else if (math_list [j] === "}={"){

                                                math_list [j] = "";

                                                math_list [j - 1] = "\\underline{" + operation + "}\\\\";

                                        }

                                        // First Number: Shows the number and a line under it

                                        // Second Number, shows up so it has the operation and line under it

                                        // Next if there is continuous adding up top, it is shown. Otherwise, start on bottom end from right

                                        // figure out how the pattern works. 

                                        math_list [j] = "";

                                }

                                /*

                                math_list [i] = "\\begin{align}" +

                                                "124& \\\\" +

                                                "\\underline{+\\quad 53}& \\\\" +

                                                "177&" +

                                                "\\end{align}";

                                                */

                                vertical_arr.push ("\\end{align}\\\\");

                                math_list [i] = vertical_arr.toString().replace(/,/g , " ");


                        }                        


                }

                // TODO: add "//over{}" specificatons, has to go after long because of how that formats

        }




        // ending stuff that turns what I output into math

        // closes the statement for MathJax

        math_list.push("}\\]");

        // print the math above other result

        math_str = math_list.toString();

        math_str = math_str.replace(/,/g , " ");

        document.getElementById(ElementName).innerHTML = math_str;

        MathJax.typeset();

}