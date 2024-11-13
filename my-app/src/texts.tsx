//Make sure " and ' have a \ before them

const texts: { [id: string]: { [_id: string] : String[]}} = {
    JAVA : {
        EASY : ["System.out.println(\"Hello World!\");"]
    }
}


function getText(Language: String, Difficulty: String){
    return texts.Language.Difficulty[0];
}
export default getText;