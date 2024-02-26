"use strict"
       
$(document).ready(function() {

// Define an array to store the values of quotes
    var quotes_array = [
        "All the world’s a stage, and all the men and women merely players - William Shakespeare",
        "Genius is one percent inspiration and ninety-nine percent perspiration. - Thomas Edison",
        "Innovation distinguishes between a leader and a follower. - Steve Jobs",
        "If you are going through hell, keep going. - Winston Churchill",
        "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
        "You must be the change you wish to see in the world. - Mahatma Gandhi",
        "The greatest glory in living lies not in never falling, but in rising every time we fall - Nelson Mandela",
        "Spread love everywhere you go. Let no one ever come to you without leaving happier - Mother Teresa",
        "In the end, it's not the years in your life that count. It's the life in your years - Abraham Lincoln",
        "Many of life's failures are people who did not realize how close they were to success when they gave up - Thomas A. Edison",
        "If you really look closely, most overnight successes took a long time - Steve Jobs",
        "To be successful, you have to be selfish, or else you never achieve. And once you get to your highest level, then you have to be unselfish - Michael Jordan",
        "When you undervalue what you do, the world will undervalue who you are - Oprah Winfrey",
        "Before anything else, preparation is the key to success- Alexander Graham Bell",
        "Whether you think you can or you think you can't, you're right - Henry Ford",
        "A man may die, nations may rise and fall, but an idea lives on - John F. Kennedy",
        "The way to get started is to quit talking and begin doing - Walt Disney",
        "Someone is sitting in the shade today because someone planted a tree a long time ago. - Warren Buffett",
        "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. - Charles Darwin",
        "Only put off until tomorrow what you are willing to die having left undone. - Pablo Picasso",
        "The biggest risk is not taking any risk in a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
        "The successful warrior is the average man, with laser-like focus. - Bruce Lee",
        "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek. - Barack Obama",
        ];

// Coding to get a random quote
    function get_random_quote() {
        var random_number = Math.floor(Math.random() * quotes_array.length);
        return quotes_array[random_number];
    }

// Coding to update the quote text
    function update_quote() {
        var quote = get_random_quote();
        setTimeout(function()
            { 
                $("#quote_text").fadeOut(50,function()
                    {
                        $("#quote_text").text(quote).fadeIn(50);
                    });
            },200);
    }

// Coding for Event listener of the button click
    $("#btn_quote").click(function() {
       update_quote();
    });

// Coding for the contact us page

    $("#btn_submit").click(function(evt)
    {
        
        let name=$("#name").val();
        let fname=$("#fname").val();
        let mobile=$("#mobile").val();
        let email=$("#email").val();
        let address=$("#address").val();

        // create an error message and set it to an empty string
            let errorMessage = "";
                // check text fields are not blank
                    if (name == "") 
                        {
                            errorMessage += "Name is required.\n";
                        }
                    if (fname == "") 
                        {
                            errorMessage += "Father Name is required.\n";
                        }
                    if (mobile == "") 
                    {   
                            errorMessage += "Mobile Numner is required.\n";
                        }
                    if (email == "") 
                        {
                            errorMessage += "Email Numner is required.\n";
                        }
                     if (address == "") 
                        {
                            errorMessage += "Address is required.\n";
                        }  
                 //When user click the button If text fields are black then alert messave coding       

                     if(errorMessage!="")
                        {
                            alert(errorMessage);
                            evt.preventDefault();
                        }
                     else 
                        {
                            alert("Infomation submited successfully");
                            $("#name").val("");
                            $("#fname").val("");
                            $("#mobile").val("");
                            $("#email").val("");
                            $("#address").val("");

                        }   

    });   
});