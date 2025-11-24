| Test Name                                   | Correct | Bug: 30 days | Bug: Allow Month 0 | Bug: Wrong format | Bug: Messy Luhn | Bug: Wrong length |
|---------------------------------------------|---------|--------------|--------------------|--------------------|-----------------|-------------------|
| Return true days 1-31                       | ✅      | ❌           | ✅                 | ✅                 | ✅              | ✅                |
| Return false month < 1                      | ✅      | ✅           | ❌                 | ✅                 | ✅              | ✅                |
| Return true months 1-12                     | ✅      | ✅           | ✅                 | ✅                 | ✅              | ✅                |
| Return true if format correct               | ✅      | ✅           | ✅                 | ✅                 | ✅              | ✅                |
| Return false for incorrect format           | ✅      | ✅           | ✅                 | ❌                 | ✅              | ✅                |
| Return true for strings with 11 chars       | ✅      | ✅           | ✅                 | ✅                 | ✅              | ✅                |
| Return false for strings without 11 chars   | ✅      | ❌           | ✅                 | ✅                 | ✅              | ❌                |
| Correct Luhn                                | ✅      | ✅           | ✅                 | ✅                 | ❌              | ✅                |
| **Coverage**                                | **100%**| **100%**     | **100%**           | **100%**           | **100%**        | **100%**          |