import { CardInterface } from "../Card/Card";

  export const getArtistsData= (element:any):CardInterface=>{
    const imagePath=element.images[0].url;
    const title=element.name;
    
    let genresString = element.genres.join(", ");
    if (genresString.length > 30) {
      genresString = genresString.substring(0, 30) + "...";
    }
    const subTitle=genresString;
    return {
        imagePath,
        title,
        subTitle,
    }
  }
  export const getSongsData= (element:any):CardInterface=>{
    const {name,album}=element;
    const imagePath=album.images[0].url;
    const title=name;
    const subTitle=album.name+", " + album.release_date;
    return {
        imagePath,
        title,
        subTitle,
    }
  }