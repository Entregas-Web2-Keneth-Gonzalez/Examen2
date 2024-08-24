interface Character {
    _id: string;
    name: string;
    gender: string;
    hair: string;
    skin: string;
    love: string;
    profession: string;
    position?: string; 
    affiliation?: string; 
    photoUrl: string;
    allies: string[];
    enemies: string[];
    first: string;
  }

export default Character;

