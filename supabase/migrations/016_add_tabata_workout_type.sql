-- Add 'tabata' to workout_type constraint
-- Tabata is a popular interval training format: 20 seconds work, 10 seconds rest, 8 rounds

-- Drop the existing constraint and add new one with tabata
ALTER TABLE workouts
DROP CONSTRAINT IF EXISTS workouts_workout_type_check;

ALTER TABLE workouts
ADD CONSTRAINT workouts_workout_type_check
CHECK (workout_type IN ('amrap', 'fortime', 'emom', 'tabata', 'strength', 'endurance'));
