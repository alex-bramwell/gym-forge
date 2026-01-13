-- Add subcategory and recommended_sections to crossfit_movements table
-- This migration adds movement subcategories (olympic, powerlifting, calisthenics, etc.)
-- and recommended sections (warmup, strength, metcon, cooldown) for better movement organization

-- Add subcategory column
ALTER TABLE crossfit_movements
ADD COLUMN IF NOT EXISTS subcategory TEXT CHECK (subcategory IN ('olympic', 'powerlifting', 'calisthenics', 'cardio', 'accessory'));

-- Add recommended_sections column
ALTER TABLE crossfit_movements
ADD COLUMN IF NOT EXISTS recommended_sections TEXT[] NOT NULL DEFAULT '{}';

-- Create index for subcategory
CREATE INDEX IF NOT EXISTS idx_crossfit_movements_subcategory ON crossfit_movements(subcategory);

-- Create index for recommended_sections
CREATE INDEX IF NOT EXISTS idx_crossfit_movements_recommended_sections ON crossfit_movements USING GIN(recommended_sections);

-- Update existing movements with subcategories and recommended sections

-- Olympic Lifts
UPDATE crossfit_movements SET
  subcategory = 'olympic',
  recommended_sections = ARRAY['strength', 'metcon']
WHERE name IN ('Snatch', 'Power Snatch', 'Hang Snatch', 'Hang Power Snatch', 'Clean', 'Power Clean', 'Hang Clean', 'Hang Power Clean', 'Clean & Jerk', 'Split Jerk', 'Push Jerk');

-- Powerlifting
UPDATE crossfit_movements SET
  subcategory = 'powerlifting',
  recommended_sections = ARRAY['strength']
WHERE name IN ('Deadlift', 'Sumo Deadlift', 'Back Squat', 'Front Squat', 'Bench Press', 'Shoulder Press', 'Push Press');

-- Calisthenics/Gymnastic
UPDATE crossfit_movements SET
  subcategory = 'calisthenics',
  recommended_sections = ARRAY['warmup', 'metcon', 'cooldown']
WHERE category = 'gymnastic' AND name IN ('Pull-Up', 'Push-Up', 'Air Squat', 'Lunge', 'Sit-Up', 'Burpee', 'Box Jump', 'Ring Row', 'Handstand Hold', 'Plank Hold');

-- Advanced Gymnastics for MetCon/Strength
UPDATE crossfit_movements SET
  subcategory = 'calisthenics',
  recommended_sections = ARRAY['strength', 'metcon']
WHERE category = 'gymnastic' AND name IN ('Chest-to-Bar Pull-Up', 'Bar Muscle-Up', 'Ring Muscle-Up', 'Handstand Push-Up', 'Strict Handstand Push-Up', 'Ring Dip', 'Dip', 'Rope Climb', 'Pistol Squat', 'Kipping Pull-Up', 'Butterfly Pull-Up');

-- Core/Skill Work for Warmup/Cooldown
UPDATE crossfit_movements SET
  subcategory = 'calisthenics',
  recommended_sections = ARRAY['warmup', 'cooldown']
WHERE name IN ('Toes-to-Bar', 'Knees-to-Elbow', 'V-Up', 'Hollow Rock', 'L-Sit', 'Wall Walk', 'Hand-Release Push-Up', 'Superman Hold', 'Good Morning');

-- Cardio/Metabolic
UPDATE crossfit_movements SET
  subcategory = 'cardio',
  recommended_sections = ARRAY['warmup', 'metcon', 'cooldown']
WHERE category = 'metabolic';

-- Accessory movements
UPDATE crossfit_movements SET
  subcategory = 'accessory',
  recommended_sections = ARRAY['warmup', 'strength', 'cooldown']
WHERE name IN ('Farmers Carry', 'Turkish Get-Up', 'Romanian Deadlift', 'Barbell Row', 'Dumbbell Row', 'GHD Sit-Up', 'GHD Hip Extension', 'Banded Pull-Apart', 'Sandbag Carry');

-- Weighted movements for Strength/MetCon
UPDATE crossfit_movements SET
  subcategory = 'powerlifting',
  recommended_sections = ARRAY['strength', 'metcon']
WHERE subcategory IS NULL AND category = 'weightlifting' AND name IN ('Thruster', 'Wall Ball', 'Overhead Squat', 'Overhead Walking Lunge', 'Front Rack Lunge', 'Goblet Squat', 'Sumo Deadlift High Pull', 'Kettlebell Swing', 'American Kettlebell Swing', 'Dumbbell Snatch', 'Dumbbell Clean', 'Devil Press', 'Medicine Ball Clean', 'Slam Ball', 'D-Ball Over Shoulder');

-- Success message
DO $$
BEGIN
  RAISE NOTICE 'Movement subcategories and recommended sections added successfully';
END $$;
