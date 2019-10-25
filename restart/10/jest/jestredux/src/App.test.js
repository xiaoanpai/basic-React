describe('actions', () => {
  it('should return object when invoked', () => {
    // 普通匹配器
    expect(2 + 2).toBe(4);
  })

  test('Object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    // 匹配Object类型
    expect(data).toEqual({ one: 1, two: 2 })
  })

  // 反向匹配器
  test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  })

  /*
  Truthiness
  在测试中，你有时需要区分undefined、null、false,有时你有不需要区分。
  Jest让明确你想要什么

  toBeNull只匹配null
  toBeUndefined只匹配undefiend
  toBeDefiend和toBeUndefined相反
  toBetruthy匹配任何if语句为真
  toBeFalsy匹配任何if语句为假
  */

  test('there is no I in team', () => {
    expect('team').not.toMatch('I')
  })

  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ];

  test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer')
    expect(new Set(shoppingList)).toContain('beer')
  })

})