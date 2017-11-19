function capitalCaseWords(arr) {
    let text = '';
    for (let i = 0; i < arr.length; i ++){
    text += arr[i];
    }
    let words = text.split(/[ ,.#]/);
    let noEmptyWords = words.filter(w => w.length>0);
    let upWords = noEmptyWords.filter(isUppercase);
    console.log(upWords.join(", "));

    function isUppercase(str){
        return str === str.toUpperCase();
    }
}

/*
capitalCaseWords([
    'We start by HTML, CSS, JavaScript, JSON and REST.',
    'Later we touch some PHP, MySQL and SQL.',
    'Later we play with C#, EF, SQL Server and ASP.NET MVC.',
    'Finally, we touch some Java, Hibernate and Spring.MVC.'
]);*/
