import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { OptionButton } from "@/components/option-button";
import {
  EXERCISES,
  TARGET_AREAS,
  type Exercise,
  type TargetArea,
} from "@/constants/exercises";
import { useTheme } from "@/hooks/use-theme";

const EXERCISE_COUNTS = [3, 4, 5, 6];

function generateWorkout(targetArea: TargetArea, count: number): Exercise[] {
  const exercises = EXERCISES[targetArea];
  const shuffled = [...exercises].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function HomeScreen() {
  const theme = useTheme();
  const [targetArea, setTargetArea] = useState<TargetArea>("full body");
  const [workout, setWorkout] = useState<Exercise[]>([]);
  const [count, setCount] = useState(4);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{ backgroundColor: theme.background }}
    >
      <Text style={[styles.title, { color: theme.text }]}>
        Workout Generator
      </Text>

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
            <View
              key={exercise.name}
              style={[
                styles.exerciseCard,
                { backgroundColor: theme.backgroundElement },
              ]}
            >
              <Text style={[styles.exerciseNumber, { color: theme.accent }]}>
                {index + 1}
              </Text>
              <Text style={[styles.exerciseName, { color: theme.text }]}>
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
  },
  exerciseNumber: {
    width: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  exerciseName: {
    fontSize: 16,
  },
});
