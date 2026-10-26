export type LessonExample = {
  text: string;
  note?: string;
};

export type PracticeItem = {
  prompt: string;
  answer: string;
  hint?: string;
};

export type LessonWord = {
  term: string;
  meaning: string;
  example?: string;
};

export type DialogueLine = {
  speaker: string;
  text: string;
};

export type ExerciseItem = {
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  hint?: string;
};

export type LessonBlock =
  | {
      type: "text";
      title?: string;
      paragraphs: string[];
    }
  | {
      type: "rules";
      title: string;
      items: string[];
    }
  | {
      type: "examples";
      title?: string;
      intro?: string;
      items: LessonExample[];
    }
  | {
      type: "table";
      title?: string;
      caption?: string;
      columns: string[];
      rows: string[][];
    }
  | {
      type: "tip";
      title?: string;
      text: string;
    }
  | {
      type: "practice";
      title: string;
      instructions: string;
      items: PracticeItem[];
    }
  | {
      type: "passage";
      title: string;
      paragraphs: string[];
      glossary?: LessonWord[];
    }
  | {
      type: "wordbank";
      title: string;
      intro?: string;
      words: LessonWord[];
    }
  | {
      type: "dialogue";
      title: string;
      intro?: string;
      lines: DialogueLine[];
    }
  | {
      type: "transcript";
      title: string;
      context?: string;
      lines: DialogueLine[];
    }
  | {
      type: "sound";
      title: string;
      sound: string;
      guidance: string;
      words: Array<{ word: string; respelling: string; example?: string }>;
    }
  | {
      type: "exercise";
      title: string;
      instructions: string;
      items: ExerciseItem[];
    };

export type LessonQuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type LessonPracticeNote = {
  title: string;
  text: string;
};

export type Lesson = {
  slug: string;
  title: string;
  summary: string;
  objective: string;
  minutes: number;
  blocks: LessonBlock[];
  quiz: LessonQuizQuestion[];
};

export type LessonUnit = {
  title: string;
  description: string;
  lessons: Lesson[];
};
