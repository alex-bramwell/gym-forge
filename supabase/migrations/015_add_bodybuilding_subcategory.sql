-- Add bodybuilding subcategory to crossfit_movements
-- This distinguishes between:
-- - Olympic: Snatch, Clean, Jerk variations
-- - Powerlifting: Squat, Bench, Deadlift and their variations
-- - Bodybuilding: Isolation and hypertrophy-focused accessory movements

-- First, drop the existing constraint and add the new one with bodybuilding
ALTER TABLE crossfit_movements
DROP CONSTRAINT IF EXISTS crossfit_movements_subcategory_check;

ALTER TABLE crossfit_movements
ADD CONSTRAINT crossfit_movements_subcategory_check
CHECK (subcategory IN ('olympic', 'powerlifting', 'bodybuilding', 'calisthenics', 'cardio', 'accessory'));

-- Recategorize movements properly

-- Olympic Lifts (snatch, clean, jerk and their variations)
UPDATE crossfit_movements SET
  subcategory = 'olympic',
  recommended_sections = ARRAY['strength', 'metcon']
WHERE name IN (
  'Snatch', 'Power Snatch', 'Hang Snatch', 'Hang Power Snatch', 'Squat Snatch',
  'Clean', 'Power Clean', 'Hang Clean', 'Hang Power Clean', 'Squat Clean',
  'Clean & Jerk', 'Split Jerk', 'Push Jerk', 'Jerk',
  'Muscle Snatch', 'Muscle Clean'
);

-- Powerlifting (squat, bench, deadlift - the big 3 and close variations)
UPDATE crossfit_movements SET
  subcategory = 'powerlifting',
  recommended_sections = ARRAY['strength']
WHERE name IN (
  'Back Squat', 'Front Squat', 'Overhead Squat', 'Box Squat',
  'Deadlift', 'Sumo Deadlift', 'Deficit Deadlift', 'Romanian Deadlift',
  'Bench Press', 'Close Grip Bench Press', 'Floor Press',
  'Shoulder Press', 'Push Press', 'Strict Press'
);

-- Bodybuilding (isolation movements, hypertrophy-focused, accessory work)
UPDATE crossfit_movements SET
  subcategory = 'bodybuilding',
  recommended_sections = ARRAY['warmup', 'strength', 'cooldown']
WHERE name IN (
  'Barbell Row', 'Bent Over Row', 'Pendlay Row',
  'Dumbbell Row', 'Single Arm Dumbbell Row',
  'Dumbbell Curl', 'Barbell Curl', 'Hammer Curl',
  'Tricep Extension', 'Skull Crusher', 'Tricep Dip',
  'Lateral Raise', 'Front Raise', 'Rear Delt Fly',
  'Face Pull', 'Banded Pull-Apart',
  'Leg Curl', 'Leg Extension',
  'Calf Raise', 'Hip Thrust',
  'Dumbbell Bench Press', 'Dumbbell Shoulder Press',
  'Incline Dumbbell Press', 'Decline Bench Press',
  'Preacher Curl', 'Concentration Curl',
  'Cable Crossover', 'Pec Fly'
);

-- CrossFit-specific weighted movements (for metcons, not traditional lifting)
UPDATE crossfit_movements SET
  subcategory = 'accessory',
  recommended_sections = ARRAY['strength', 'metcon']
WHERE subcategory IS NULL AND name IN (
  'Thruster', 'Wall Ball', 'Cluster',
  'Overhead Walking Lunge', 'Front Rack Lunge', 'Goblet Squat',
  'Sumo Deadlift High Pull',
  'Kettlebell Swing', 'American Kettlebell Swing', 'Russian Kettlebell Swing',
  'Dumbbell Snatch', 'Dumbbell Clean', 'Devil Press',
  'Medicine Ball Clean', 'Slam Ball', 'D-Ball Over Shoulder',
  'Farmers Carry', 'Sandbag Carry', 'Yoke Carry',
  'Turkish Get-Up'
);

-- GHD and specialized equipment
UPDATE crossfit_movements SET
  subcategory = 'accessory',
  recommended_sections = ARRAY['warmup', 'strength', 'cooldown']
WHERE name IN (
  'GHD Sit-Up', 'GHD Hip Extension', 'GHD Back Extension',
  'Good Morning', 'Glute Ham Raise'
);

-- Success message
DO $$
BEGIN
  RAISE NOTICE 'Bodybuilding subcategory added and movements recategorized successfully';
END $$;
