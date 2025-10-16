export interface GoalsDto {
  icon: string;
  title: string;
  description: string;
}

export interface GoalsData {
  subtitle: string;
  title: string;
  description: string;
  goals: GoalsDto[];
}