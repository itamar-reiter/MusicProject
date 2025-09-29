// Music-related enums for the project

// Music genres enum
export const MusicGenre = {
  ROCK: 'rock',
  POP: 'pop',
  JAZZ: 'jazz',
  CLASSICAL: 'classical',
  ELECTRONIC: 'electronic',
  HIP_HOP: 'hip-hop',
  COUNTRY: 'country',
  BLUES: 'blues',
  REGGAE: 'reggae',
  FOLK: 'folk'
};

// Mood categories enum
export const MoodCategory = {
  HAPPY: 'happy',
  SAD: 'sad',
  ENERGETIC: 'energetic',
  CALM: 'calm',
  ROMANTIC: 'romantic',
  ANGRY: 'angry',
  NOSTALGIC: 'nostalgic',
  MOTIVATED: 'motivated',
  RELAXED: 'relaxed',
  EXCITED: 'excited'
};

// Playlist types enum
export const PlaylistType = {
  FAVORITES: 'favorites',
  WORKOUT: 'workout',
  CHILL: 'chill',
  PARTY: 'party',
  STUDY: 'study',
  SLEEP: 'sleep',
  DRIVING: 'driving',
  CUSTOM: 'custom'
};

export const CurrentPage = {
    LOADER: 0,
    USER_INPUT: 1,
    USER_CHOOSE_SONGS: 2,
    CLOSURE: 3
}

// Song rating enum
export const SongRating = {
  TERRIBLE: 1,
  BAD: 2,
  OKAY: 3,
  GOOD: 4,
  EXCELLENT: 5
};

// User input status enum
export const InputStatus = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error'
};

// Helper function to get all values from an enum
export const getEnumValues = (enumObject) => {
  return Object.values(enumObject);
};

// Helper function to check if value exists in enum
export const isValidEnumValue = (enumObject, value) => {
  return Object.values(enumObject).includes(value);
};

export const sampleSongs = [
  { song: "Bohemian Rhapsody", author: "Queen", year: 1975 },
  { song: "Hotel California", author: "Eagles", year: 1976 },
  { song: "Sweet Child O' Mine", author: "Guns N' Roses", year: 1987 }
];
