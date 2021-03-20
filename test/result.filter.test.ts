import NormalizedResults from '../src/type/normalize/results';
import ResultFilter from '../src/filter/result';

describe('test result filter', () => {
  it('should return top three results of one league', () => {
    const expected: NormalizedResults = {
      意甲: {
        AC米蘭: {
          league: '意甲',
          team: 'AC米蘭',
          win: 10,
          draw: 0,
          lose: 3,
        },
        阿特蘭大: {
          league: '意甲',
          team: '阿特蘭大',
          win: 9,
          draw: 1,
          lose: 3,
        },
        祖雲達斯: {
          league: '意甲',
          team: '祖雲達斯',
          win: 8,
          draw: 2,
          lose: 3,
        },
      },
    };
    const nresults: NormalizedResults = {
      意甲: {
        AC米蘭: {
          league: '意甲',
          team: 'AC米蘭',
          win: 10,
          draw: 0,
          lose: 3,
        },
        熱拿亞: {
          league: '意甲',
          team: '熱拿亞',
          win: 5,
          draw: 3,
          lose: 5,
        },
        祖雲達斯: {
          league: '意甲',
          team: '祖雲達斯',
          win: 8,
          draw: 2,
          lose: 3,
        },
        阿特蘭大: {
          league: '意甲',
          team: '阿特蘭大',
          win: 9,
          draw: 1,
          lose: 3,
        },
      },
    };

    const actual: NormalizedResults = ResultFilter.TOPK(3)(nresults);
    expect(actual).toEqual(expected);
  });

  it('should return top two results of two league', () => {
    const expected: NormalizedResults = {
      意甲: {
        AC米蘭: {
          league: '意甲',
          team: 'AC米蘭',
          win: 10,
          draw: 0,
          lose: 3,
        },
        阿特蘭大: {
          league: '意甲',
          team: '阿特蘭大',
          win: 9,
          draw: 1,
          lose: 3,
        },
      },
      德甲: {
        沃爾夫斯堡: {
          league: '德甲',
          team: '沃爾夫斯堡',
          win: 10,
          draw: 0,
          lose: 3,
        },
        法蘭克福: {
          league: '德甲',
          team: '法蘭克福',
          win: 9,
          draw: 1,
          lose: 3,
        },
      },
    };
    const nresults: NormalizedResults = {
      意甲: {
        AC米蘭: {
          league: '意甲',
          team: 'AC米蘭',
          win: 10,
          draw: 0,
          lose: 3,
        },
        熱拿亞: {
          league: '意甲',
          team: '熱拿亞',
          win: 5,
          draw: 3,
          lose: 5,
        },
        祖雲達斯: {
          league: '意甲',
          team: '祖雲達斯',
          win: 8,
          draw: 2,
          lose: 3,
        },
        阿特蘭大: {
          league: '意甲',
          team: '阿特蘭大',
          win: 9,
          draw: 1,
          lose: 3,
        },
      },
      德甲: {
        沃爾夫斯堡: {
          league: '德甲',
          team: '沃爾夫斯堡',
          win: 10,
          draw: 0,
          lose: 3,
        },
        奧格斯堡: {
          league: '德甲',
          team: '奧格斯堡',
          win: 5,
          draw: 3,
          lose: 5,
        },
        費雷堡: {
          league: '德甲',
          team: '費雷堡',
          win: 8,
          draw: 2,
          lose: 3,
        },
        法蘭克福: {
          league: '德甲',
          team: '法蘭克福',
          win: 9,
          draw: 1,
          lose: 3,
        },
      },
    };

    const actual: NormalizedResults = ResultFilter.TOPK(2)(nresults);
    expect(actual).toEqual(expected);
  });
});
