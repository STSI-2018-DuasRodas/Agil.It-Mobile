export class StringHelper {

  public static FirstLetterUpperCase(text, allWords = true) {

    if (!allWords) {
      if (text.length < 3) {
        return text.toLocaleLowerCase()
      }

      let firstLetter = text.substr(0, 1).toLocaleUpperCase()
      return `${firstLetter}${text.substr(1).toLocaleLowerCase()}`
    }

    let wordsArray = text.split(" ")

    return wordsArray.map(word => {
      if (word.length < 3) {
        return word.toLocaleLowerCase()
      }
      return `${word.substr(0, 1).toLocaleUpperCase()}${word.substr(1).toLocaleLowerCase()}`
    }).join(' ');
  }

  public static JustifyLeft(value, size, characterToFit : string | number = "") {

    if (typeof value != "string") value = value.toString();

    return value.padStart(size, characterToFit);
  }
}
