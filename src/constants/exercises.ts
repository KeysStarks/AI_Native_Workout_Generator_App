export type TargetArea = "full body" | "upper body" | "lower body" | "core";

export type Exercise = {
  name: string;
  sets: number;
  reps: number;
  timed?: boolean;
};

export const TARGET_AREAS: TargetArea[] = [
  "full body",
  "upper body",
  "lower body",
  "core",
];

export const EXERCISES: Record<TargetArea, Exercise[]> = {
  "upper body": [
    { name: "Push-ups", sets: 3, reps: 12 },
    { name: "Bench Press", sets: 3, reps: 10 },
    { name: "Shoulder Press", sets: 3, reps: 10 },
    { name: "Pull-ups", sets: 3, reps: 8 },
    { name: "Chest Fly", sets: 3, reps: 12 },
    { name: "Dumbbell Press", sets: 3, reps: 10 },
  ],
  "lower body": [
    { name: "Lunges", sets: 3, reps: 12 },
    { name: "Leg Extension", sets: 3, reps: 10 },
    { name: "Hip Extension", sets: 3, reps: 12 },
    { name: "Squats", sets: 3, reps: 10 },
    { name: "Leg Curls", sets: 3, reps: 12 },
    { name: "Calf Raises", sets: 3, reps: 15 },
  ],
  "full body": [
    { name: "Burpees", sets: 3, reps: 12 },
    { name: "Farmer's Walk", sets: 3, reps: 30, timed: true },
    { name: "Deadlift to Row", sets: 3, reps: 10 },
    { name: "Clean and Press", sets: 3, reps: 10 },
    { name: "Thrusters", sets: 3, reps: 12 },
    { name: "Kettlebell Swings", sets: 3, reps: 15 },
  ],
  core: [
    { name: "Plank", sets: 3, reps: 60, timed: true },
    { name: "Leg Raises", sets: 3, reps: 12 },
    { name: "Decline Sit-ups", sets: 3, reps: 12 },
    { name: "Russian Twists", sets: 3, reps: 20 },
    { name: "Bicycle Crunches", sets: 3, reps: 20 },
    { name: "Mountain Climbers", sets: 3, reps: 30, timed: true },
  ],
};
