| Test Name                                   | Correct | Bug: No len check | Bug: No trim | Bug: Wrong year | Bug: No luhn |
|---------------------------------------------|---------|-------------------|--------------|-----------------|--------------|
| Error for !11 chars                         | ✅      | ❌                | ✅           | ✅              | ✅           |
| Trims string                                | ✅      | ✅                | ❌           | ✅              | ✅           |
| getYear                                     | ✅      | ✅                | ✅           | ❌              | ✅           |
| luhnIsCorrect error                         | ✅      | ✅                | ✅           | ✅              | ❌           |
| Format incorrect                            | ✅      | ✅                | ✅           | ✅              | ✅           |
| isValidMonth false                          | ✅      | ✅                | ✅           | ✅              | ✅           |
| isValidDay false                            | ✅      | ✅                | ✅           | ✅              | ✅           |
| **Coverage**                                | **100%**| **100%**           | **100%**      | **100%**         | **100%**      |