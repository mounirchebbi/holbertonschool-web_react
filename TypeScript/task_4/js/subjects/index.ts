namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  export class Subject {
    teacher!: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }

  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }

  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }

  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}

// Make Subjects available globally
(globalThis as any).Subjects = Subjects; 