# LENS research calculator

**Liver Evaluation and Navigation for Screening (LENS)** implements the supplementary assessment pathway evaluated in the LENS development and validation study.

Online calculator: https://levoder.github.io/LENS-calculator/

Repository: https://github.com/Levoder/LENS-calculator

## CAP248 model update — November 4, 2026

This version uses the model refitted for **CAP ≥248 dB/m and LSM ≥8 kPa** and the development-selected supplementary assessment threshold of **12.2** (predicted probability ≥0.122). It replaces the earlier CAP288 model and 13.9-point threshold. The original fitted coefficients, equivalent explicit spline formula, computational engine, and interface were updated together.

## Inputs and outputs

Enter sex, age (years), BMI (kg/m²), HbA1c (%), AST and ALT (U/L), and platelet count (10⁹/L). Results update automatically and show FIB-4, the LENS score (0–100), and the source of the further-assessment recommendation.

The study population comprised adults aged at least 35 years with metabolic risk who met the study eligibility criteria. The pathway retains FIB-4 recommendations (≥1.3 at ages 35–65 years; ≥2.0 above 65 years). Women below the FIB-4 threshold are additionally recommended for assessment if LENS-Base ≥12.2. Men retain the FIB-4 rule. Decisions use unrounded values.

This is a research implementation. Its prospective clinical use and effects on patient outcomes have not been evaluated. The score estimates MASLD with elevated liver stiffness; it does not diagnose histologic MASH or advanced fibrosis.

Open `index.html` in a browser to use the calculator offline. Calculations run locally; entered values are neither transmitted nor stored by the calculator. This repository contains no individual-level study data.

## Files and verification

- `index.html`: self-contained English interface.
- `calculator_engine_en.cjs`: computational implementation.
- `explicit_formula.json`: full-precision coefficients in the equivalent explicit spline basis.
- `LENS_Base_coefficients.csv`: CAP248 fitted coefficient export.
- `verification.json`: checks against 1000 synthetic inputs and R-derived probabilities, threshold boundaries, invalid input, and recommendation logic.

Use a commit permalink to identify the exact implementation. An offline copy accompanies the manuscript as Supplement 2.

Maintainer: Levoder.
