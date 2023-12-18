# Task 1
- create a json response having:
```json
{
  "parentView": {
    "value": ["view1", "view2"],
    "breakParameter": "childTable",
    "childTable": {
      "breakParameter": "Country",
      "value": ["Country1", "Country2"],
      "Country": {
        "breakParameter": "Gender",
        "value": ["male", "female"],
        "Gender": {
          "breakParameter": "AgeGroup",
          "value": ["20-40", "40-60", "60-80"]
        }
      }
    }
  }
}
```

# General
- 3 fields
  - value
  - breakParameter
  - NameOfBreakParamter
