import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { OptionButton } from "@/components/option-button";

type TargetArea = "full body" | "upper body" | "lower body" | "core";
type Exercise = {
  name: string;
  sets: number;
  reps: number;
  timed?: boolean;
};

const EXERCISE_COUNTS = [3, 4, 5, 6];
const TARGET_AREAS: TargetArea[] = [
  "full body",
  "upper body",
  "lower body",
  "core",
];
const EXERCISES: Record<TargetArea, Exercise[]> = {
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

function generateWorkout(targetArea: TargetArea, count: number): Exercise[] {
  const exercises = EXERCISES[targetArea];
  const shuffled = [...exercises].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function HomeScreen() {
  const [targetArea, setTargetArea] = useState<TargetArea>("full body");
  const [workout, setWorkout] = useState<Exercise[]>([]);
  const [count, setCount] = useState(4);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Workout Generator</Text>

      {TARGET_AREAS.map((area) => (
        <OptionButton
          key={area}
          label={area}
          selected={area === targetArea}
          onPress={() => setTargetArea(area)}
        />
      ))}

      <View style={styles.row}>
        {EXERCISE_COUNTS.map((n) => (
          <OptionButton
            key={n}
            label={n.toString()}
            selected={n === count}
            onPress={() => setCount(n)}
          />
        ))}
      </View>

      <Pressable
        style={styles.generateButton}
        onPress={() => setWorkout(generateWorkout(targetArea, count))}
      >
        <Text style={styles.generateButtonText}>Generate Workout</Text>
      </Pressable>
      {workout.length > 0 && (
        <View style={styles.workoutList}>
          {workout.map((exercise, index) => (
            <View key={exercise.name} style={styles.exerciseCard}>
              <Text style={styles.exerciseNumber}>{index + 1}</Text>
              <Text style={styles.exerciseName}>
                {exercise.name} - {exercise.sets}x{exercise.reps}{" "}
                {exercise.timed ? "sec" : "reps"}
              </Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    gap: 8,
  },
  generateButton: {
    marginTop: 20,
    marginBottom: 12,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    backgroundColor: "#2f5d8A",
  },
  generateButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  workoutList: {
    gap: 8,
    paddingHorizontal: 16,
    width: "100%",
    maxWidth: 360,
  },
  exerciseCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 8,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
  },
  exerciseNumber: {
    width: 20,
    color: "#2f5d8A",
    fontSize: 16,
    fontWeight: "bold",
  },
  exerciseName: {
    fontSize: 16,
  },
});
