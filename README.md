# LENS research calculator

**Liver Evaluation and Navigation for Screening (LENS)** implements the supplementary assessment pathway evaluated in the LENS development and validation study.

Online calculator: https://levoder.github.io/LENS-calculator/

Repository: https://github.com/Levoder/LENS-calculator

Open `index.html` in a browser to use the calculator offline. All calculations run locally in the browser. Entered values are neither transmitted nor stored. This repository contains no individual-level study data.

## Inputs and outputs

Enter sex, age (years), BMI (kg/m²), HbA1c (%), AST and ALT (U/L), and platelet count (10⁹/L). Results update automatically and show FIB-4, the LENS score (0–100), and the source of the further-assessment recommendation.

The study population comprised adults aged at least 35 years with cardiometabolic risk who met the study eligibility criteria. The pathway retains FIB-4 recommendations (≥1.3 at ages 35–65 years; ≥2.0 above 65 years). Women below the FIB-4 threshold are additionally recommended for assessment if LENS ≥13.9. Men retain the FIB-4 rule. Decisions use unrounded values.

This is a research implementation. Its prospective clinical use and effects on patient outcomes have not been evaluated. The score estimates the study endpoint of MASLD with elevated liver stiffness; it does not diagnose histologic MASH or advanced fibrosis.

## Files and reproducibility

- `index.html`: self-contained English interface.
- `calculator_engine_en.cjs`: computational implementation.
- `explicit_formula.json`: full-precision coefficients in the explicit spline basis.
- `LENS_Base_coefficients.csv`: original fitted coefficient export.

Version 1.0.1 (November 2, 2026). Formula and cutoff are unchanged from the verified study implementation. Use a commit permalink to identify the exact version. An offline copy also accompanies the manuscript as Supplement 2.

Maintainer: Levoder.

