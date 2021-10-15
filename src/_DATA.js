let users = {
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABWVBMVEVYsOD///+KXEJDSVX/6L5gNQrV4e3exJJGREn53KRYtedgMABdZmn/7MFTrt9NrN//8MQ/PkU+RFA5OULa5vLz+f2LWj1gLADT3+w3N0GMVzU8PESLXUNgKwBgLwBCRU/h8PmCwueEUzpXKABnt+OEw+fK5PTax6Y3PUnA3/Kh0OyRyel1vOTp9Puz2fBZoslQHgCfqbTOr4xWUlO+rpSCeW3n0q5mYFzz16DlxYy1wMtiaXWGj5hwjaF4foV/cnBlnL2EaFpqla+pg2Vyh5bJqYeddFi5lnZ8eX5pPRinmoVya2Tw27XMup3fwp2Wi3qyo4yDXjWQb0tfTDxxSiHv481Og6RJa4RLdJBSlbxFVGTCzdmBbGOGZFGwjG1qXFJdQSKASyF7VUJpTkNcS0dvQCHMqnyol3lddYZ6TjqMZzzNrnxcc322lmdfPhpNFgD98t6Fr8yps79k1MUoAAAWWklEQVR4nMWd7V/TyBbHU9pCHzZ9LlJboRSEUh6qFAoCVhRFxSLququCuk/u3rvrvbt7/f9f3JnJ0ySZTOacpO5540cIyXxzzvzOmYckWmLiVm+vrG311hc3NpY1w5Y3NhbXe1trK+365C+vTfDcBK23vqEVqRWoaZax/7Gfaxs3e2sTBZ0UYXvNYOOwxMZItY31tfaEWjIJwvbWTY15LQTOw6ktbk2CMm7C+so6pVNn4zEJ5fpK3BEbK+Hm2s0Cks6hLCyubcbZqBgJ1xa1iHgWpLa4Fl+z4iJsr2NjUwxZXI+rT8ZCWN9ajhHPglzeiqVLxkDY7sUTnX5GrReDIyMTtm9OBM+CXIzMGJGwtjFBPoNxo/YPEtYWJ8xnMC5GYoxAONH49DBGiFU0YX39K/EZjOtoXcUSbkGqzjgYC1tflbC2XPyqfNSKyytfjfCrBqhjyFBFEK585QDlGAsIN4IJiQOR7cvxhjwHwo1QwhVED6RA/eMHdx+Ontyj9mT08O6D4z6Ks6hB3Qgk7EF7IMHoPxjdb83OXr8+6xj5z9SHew+PNTBlodibIOEm0IHEdXefMLQpkZHfXH//sK8BIYvLoBEyhBAoMbn+3ffUV1IjlPcf9mGMMMEBEIIiNJc7fjIVhmdBzt47BkUrKFLVCRcBEZrLPbivhmdB3n8AICSRuhg7IawLHoP4TMZjkBuVO6MiYVtTj9Bc/x6Uz2C8B+mPBU1xvKFGCNGY3MMA6QxnnH0IQVTUGyXCNfUIzfU/XMfxUbt+H+LGotKcowrhFgDwASZAeTc+gCCqjKgUCHsAjRlFcKDpxpH61TSVrBFOCAF8HxmQIL6PFzGUEAL4IVKEWjb7AdAZwxHDCAGA/XgA40YMIQSIjHY/JkAoYojcyAkBaSJGQILY6qtfOCRpSAlXAID3YgSkXlS/slaUpn4ZYRtQyERPEx5EiKIWZAWchHBTvRYliT5eQJI0nqh3xYImKcMlhMvqLuzHGqIm4l0A4jKGcBEQo3GqjIN4rNwArbAIJwQkwtzD2GOUGkxtAtNiECFERicRo9SujyBVeJCgBhBuQiad4k0UPCJg2F8oBKhNACFAZXLHE4lRarP31W9zoNqICSHl9mRkxjCIngZ1RSEhpBNOIBVyNqvekKCuKCKsA6adtFxcIwqhgcSmsCxathERQlaXJutCgggowbXiuhohJEa13PtJupCEKcSJwjj1E9ZBixPHkwWcmoKMo0ig+uPUT7gOIcyNJk0IklOt4I9TH2ENtoDWmjAgLCeSOPXtLvIRAnL95HWGGqQAF+V9LyFkYoYQPpl0kBInAgaKmmDaxkMIkxlNmzwgMOv7xcZDCJIZoqSTD1JomPrExk3YBq7TT1xJqQHDVCu2JYSAcT0jjKli68h//QG4zH8zmBCYKeIa+rYetaSMs6Ck780YLkKgC+Pqhiel1IkM8TpkxU3zTtrwhFAXxjQ/03mup0rPJW6EdkS3E3nCDeh+p3imL071VCqlj08DEWffAwkLG2JCoJBqMS1VUBdS0z8GIkIm3ZjxcsoRQnuh1o+lKD01AAnioyBEqNS4eqIWwYWxSKnlQoq4HYAIzPmay4kOYQ+8LzYOKe18tAEJ4nMxImwERa3Q8xPWoXwxDSzGKc4CvHgdss/GtLqPEDaoYIR3oxN2tvWUC1HYF2FTGcycIYZNCBoXGoQxpMNTNyBBfCxARBA640SLEK4zdHtXVMDOOOU1XZAXwSlf47TGIgQOmxhh5JGFN0aZjf05CENoD6IsQsQG/MiELh2VCSqGUCu6CSGbLmIjbAn4hF0RR7jmIgTXMzEQdoYiF1LzximK0KprDMJNzFMwEbWUK2bC4nT2GeoJlE2OEBOkEfNh51EQYCpVOvESYgDNMNXQQRqNsPM4GDCVGnbchD9gCM3ZDEYInUM0CSNUbZ0TGaB3JDX7LaZ95rwiIwStNjmGr7w7JzI+YmPX4UhCYyVKQ6Z7RvgTFvA0JXWhx4mtzo+o9hlJnxGi/p6MD3/CDYEJYJjpfE9s/fonsoUWIaImjUKoAEjk9JQnTOMayGpTDTVwMgnzGELSB0NClDmRHymm80jCLZPwJvKp1/41DOBHFUBijgs7+Wu4BrJ8oeG7odaf7/BO/Bg8H8gB+vKgrpdKJfJD9o/uTNrYWkOC9Aa2iQYhthuSKH3KEXaelwIny5yDHpU8eKnzs91BtUGsPNg921kdpwxMp3RrpdM3oJNtptGOqCFLNoMwP+UgkkK69CisFnfVoro+3tltNprljGnlJgElnKtjCmmeutUhhMdIwjVGiMyGlDD9q0PYGuurFz9LHdhyjSZK44tBg9CVmQeJVQ1W8v/B7s649JH+zelp5ymekGZEDT6ZzxOmnZ7YOhtUm58k6jrrElE9ddZsZjLNRmb3xflwTMqY1fOzZ82G4dAy+fG/aEBks/9dIoTAtRmbcIMSwqcRecKnUy0G1fol06Qt+zkQsfXLxdgUEiIuqReZKuEYnA2pvtiakzrfzViQzU/Ehdls9nU+fQ08YWpZnRCihYYRpn/9LUuT8yerMwUB/v6p3Gzu7jBvDc9JfGYyjb2dlFt4qKKOX+w1rI7588csc+K1fyMJidRo2LLbIry1n92fmvrFbFJj91TI1zlZpe0uN5qZwWBQpm5qlnfEmVFP7WTM+1V+TAj3l9LzaMIVQgjZSyogfE3vcscEbO6UhLPWnW0SgXa7jXtxEZz59dQz49Dqv8jZs08jEPYIIVpKGWH+D3qXfzcbdF5Kjf2EndOxsUS45yA2z73x6Tbj0OYFJXyZnz9EEhIx1fBSygjnX9E2nH5iMbVLW+0N087Utu0ax4M7ckD9vMrOOEPP/iqf38MSbhBCLB+t2izC3zoUsbpDiy/PHEvnZGxHY+nCdqKUjxo78kPWJPwBq6WEr45/WxAlzDPC/U6LOmZV9852dk6fc87Sd5UJS9SDH04Y4R/5/I/o173UNXyyIGMLQviSNeK0s101CTmp6bS2XXKi24CNYThh8+LxR3by10TQ0IRtDZ8stP4Ncuk8a8TJVOlZuXGu8xVzp/N47JJLfdVOdM0LeT+kUVodP/qNnZx2dzThioauu01Ckg9pR/xYIkXYGUfo4yN+2WVVaJOKSDlkkDisZgapbSY0d2jZhiZc07ADfGLvKOHSZ9qKz9ulnWr5Wcki7LR8fKSWYSXB6pAmxuq5fDqRnG239PwOu3tL+OETGeZr8OV7y3LHLEoNqRnrQxKCY0bY6ZxuC9I5aXWm+oIMdkvjQYbdjWAj7m6elYam0EQgLPQ0fMLPPaCE6TRrBmnVgDlGf9R6PBSWK/qzcvWMcemrzUxZqjXkHlDdYjePjJ7QwyeS8jXUhL5BePda2g5T0uyLZnmX1S7i+GM6Y4YukSWp1ujnDdINU4zwMwnS9DXk8EkrLGr4kib3b0bI6jaCSB2T8Xc+p9W7ZaPoMQmkxxp3IGvUbJTwe3RRE4lwnkXp0ozpxD2ZY6gLWcI0/kdC+kx+7NBw4Qx1Ib70JoTL4UcFEf7HIDScaDim6d96YFppr8ypi75DGKTHUndbOkOu8Q02XSxHIfzGIEzf+mxIjRvC45YXDVchUxpIjt1xXPj5lnEX0YUpno8S5g1CNkbMmsElHjToQ5ICL/hpGnrsC/EImB1ruvC1cYX8t+jSOwrhnkW49Mpwon5RzZRXhYjEvQM3BztWgEiHkcaxdFixZBL++A8AatoPFmF66b+M0Bi4ChD13Wam6sWhx/r1lABaxxrzbIY9xab8SPatTWgh6mNSkDV2PM3WU7tk4PHCA06DsZwZen5aGg7KZqgTwFv2BfL/COGfDmF66eVno9kUcXfMt7u0SrzS8OcRqr3lzA5fIJRSZ82ydTM+v1xyzj9/jG5mBK3hAMlN/ovN2OvDQTXTzFywaVCdrroMd2mjL3yRS3jOG0RT9s7NQ+lE4oBOojIP6tt/8efHzglHyhaFGzxhesnYfKCnLqrlTLMxuNg5X13dORs0SA1aFatmaZURZcxD9xpVOolqBK7+ynUD0Sl/OUJN03cTpp86UWkvR1SbdJJ0T6yv7Hawqf2quWpRbgxeWFX7kuvk88iUH6Vqs4YWtt2yFpb01CpbUqKYpPHPziVroqXhRZkdWqaH7u1Y4qo/chNiZ9sIIXpsYQ4tuEa8cooytiy4N9h7drEzDhhrOH4UHVp6nXefHLfhRCvcxI8PrcKbc6Kr4XRN11jdDTP7UO7Y4ZLn5H/i0gUZH6LH+E7RZmuNdCcXyEonXsJrSMIefp4m962XMP86NsLxU8+5saP84hZ+ri3nbQNxomhXM8a8OkN9iEsXxTX8fGnuho8w/zIuJ772xkcauThTXMHPeXvTIXNi4K5YkOnPb/lOnUftwKRz3th1C186ZISvYiEsvfS5kBiOsI5ee/KlQ2a3wtYjVEzkQvSUKX790J8sDCeGrUcomNiFqNqbrR8iU74/WRhODJxeArjQJ6TUULU3WwPGruP/KSSMwYmeUYVlqMkoto6PTBd9YTNikNMAFxJEDOEKej9N7oFIaGgwRZZTYS+kZ0ZIDdtPg9sTZU0Hx+5EQTljGmpmv47f1/Yp4E5Hrk6D7hxm3tvY14YT035QO+gQI4LY+AcVDuGP4FaaexNRtfexoKKxm4LPGIEyQw3eEc39pRipCe6G6Whi4y+5HYMPL8w9wqi6TZzvTbsleWpLaqWPEhdiZjLwe/VFAwvecHEqLkg5JwLD1N6rj3lQPSAbmjb/Eic2shhNwws3+3kLeEfM/SBvCk5P9VeyGCWWB26Nsp+ZgXfEvkRnTER43tcfhwDCxxfoZ9fMPQrS2/0U2hWlicI6K2ihlHt2DVx8S5XUsPmXQMJxaFykgbtOuOcPgc+Q5o5DXUjsryzMhSEqYxioruGeIQXmC2d5W2a39kGI+68Vzkmc+B9lJ/LPAQMLN1nF5iLcVwecmVEjBMSp61lu0PP4AfMXIkJltZlRJsznlb/uwT+PD3qJ/t0beRX7ixDOKCLOUMJ5pdPmrymu0bjfqQAK028UbT+bnZlRClQKOPNM9bzfqD0i5HkvBuTdJjk1K9Kdk6TloXxjBnhnQ/G8qh/39LzbJMJzJYFXYPvuwhH3Z0zCeC/vez9NhC37AVbcN50o74wzpt2Bv8ZJfnnvO4YQ74mSWqG4kbKcKHHj/oxN2CvEeZP974lCP7IuPH2xuE5uYdZBFDM6fDMz3yXqW4X4vhUteNcX/kFLrxWKy1usXvo7a8WpkJHnmxkat3k5Nkb/+9oQ79wTGglP+9XvXJxS4wqAsQuPmPUnKxuxMIreuReP1hjhmQhADDbub1YWY2AUvjcR9xoelxUKPc+rpl1xGmx/u/6ofTMqI/8q4UjvL/UB+t/br4T4nfevNrEvsjAt4P2lEZ61ZHzF5Z7/YzZ/KyD6AOknNqK0JegdtOD3CLv5Nramp6f9bQ1FvCMArE9HUtXA9wjje2JBu7lSI4Bzvi8TJEIDVQCYmCPn6i3DPgPOtWaRP1ek93mbluv/b47yUUTRl16yMkUVAZon60G+d8OZ5H3eqDfV5PpvFg6nbRM02EgaYjf+LTi8bp1r7n+Y/b2yd7LD5TSXe/dmYSHZvV2zWiX8ctZ3AYhD0cEJ+1xX1UvYR9eZSd+rDxxE5bR3l+WFJLHLOduJojg19MbHKIpQkiqsc9VGlWT58nsN+EZ26bcRQPOKOe37y3LSsO6RdeOFYpMwIzW7z0OKIjRhyIzhwi499QKQMeT7FupDjFz/bXIhaVvFbpdQbGw3OpBiB5IY5V2YNBkLyoxh3yhRHSdSeeH4COHI7j1CsaH2XdaxVNBBdRvwqmKffWHhrSJj+HdmVDIG6X5vyi4+GqdXNmLwd09TFl9AgBKz71PtsMKdnjAqzSIqfCsoVGxo91vw8hEnHjpODIhTarqcL7FpAx503RdYWHgTzqjyvacQsQngo078EiY2hknwuFTocaHF+C6EUembXbKVKCIvYjxql6Fiw0zmYU5mvnQFl1goX76TCavad9eCv51nZPdAczJGsNiQokL2y00nrQZcRMqo+u088fcPqbzI+Cjild2+QLGhUhmsRE6MHolcaDAGJkj17x8K4jS4+3HGZYzAOJX+0omBK+mFFpJCRvVvWPq+Q5orfJ8Mw2NODBWbtiyIOZkZ+WTG60h/goR8h9ST93NvlfiIE7nyVFiBW+lczG+70JcphH5864nRDeFJA78HzHfFfjn0eqaFiY19A0RxaqfC6dpliAuZld+5AIHfA+a7Yu6tmgcZolRsak4+keFLZIa3hTd8nEK/6cx3xYIyn6uy8euJ4yRRP62JClKplbmlUvh3ucl430TMvVN3YZIfC/sgpjmb88aUIzPT/mpGbAtvbScWFwM5gglttXkDIUwmA8XGiVFRV3Q64W2lGGWIdpgFfLE6hNBUmz4MMHAYtekG9MSpE8GqMUoJzZ3fBS1AZUIIE+0CUGeYOUnRLTbTHnPFqbTiDrZL04XBVZKc0BBUGB814ZyNFaO1ml0VCH4LiVFiC++kMhpOSLdovFNOhpZxcepE4qZNMDqyJle534J11CR8ozmbLlCEia0iUGeoOXpqR6IdhaNupVuxkqYdp07sQmKUIvb9EzMwwkQPEjS2OXnfPI2FzMqxil35mHHatn2ulus5wrfBiVCRMAG9JjUu7xsaYMcoG9dyv2a/tR2sUo96rBEGGE6IQuTq0zqPYKQCripgN8D+7RziQqHtDydMgNTNuvKBBVHjEahUdrvcKgfVUycVAjshvVfhzVcgRCHa4ygiNu1pDvHq9sE0b07FDe6ESoBKhAnhrJDcnJQxV3cRTddqrv+27UQJ7oTdLyqNVyJMXFWg8cN3NqnNWYBXQMBK5Uqp7WqEiekkHPFADdEiVRr1coBJNUBVwsTmJTxS58K5bAudmfECXkqKbRRhoj6CIlYOw8FsQKDKdEeyeWUcIUJSuyPVOIXV24oiCidMHED1hp+Yslimr+b8P4TJaKVyAGg1hDCxeQh0IzdWNFmuDpNJr8rW5PO/vpMeqnZBOCEt4WBu9ArqHNXkhocbJKMVhUItCmHiCqqpVzyNWXm7++ccpFjrqiYJNCFUUyuXPKLR4TyEIEB1DUUTEsEBRSo/028EZKXBh24NcMcqXYjE4AkTdVBvrBzyiERpLr/gAEkPBDsQSUh6I0RU3Yi1Ob70BmT67iG0B0YhpOkfEFyHQfWbOmAXkuRjIQSFahCiMiAyQKMRkvHGSJmRIAoKOFXASnckWfufICHpjsqMlcMrf62mBljBdsA4CJnkqDFWkl5ENcCofJEJWayquaLiKeBU0kQ3UnzGRJhI1I6SSo6s8BX3XHi+qXSTR5H5YiEkuvpFKVidwVQtvBYl4fkFrZ+8xUJIbPqoGw7ZNSW1dhUymqh0u3G4j1lchMSRB6NKGGTlknbG2oF0XoucZXQQi/uYxUdIbDMUskI6o3hTHo8HGuGGWayECepJojsyyu4ocE6GxGbyKEbvGRY3IbXalxGlDMAU/rxC6UZf4up7vE2CkNr0wdEhwQzkdLF1k4dHB5OgozYpQmr16YPbI8ZJSV2s9L/s58nD0e0D6abaqDZJQtPq01cHt4+ORoeXlybf5eXhaHR0++Bqomim/R+2BYGNGE4egwAAAABJRU5ErkJggg==',
    answers: {
      '8xf0y6ziyjabvozdd253nd': 'optionOne',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo',
      am8ehyc8byjqgar0jgpub9: 'optionTwo',
      loxhs1bqm25b708cmbf3g: 'optionTwo',
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9'],
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    avatarURL: '',
    answers: {
      vthrdm985a262al8qx3do: 'optionOne',
      xj352vofupe1dqz9emx13r: 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  johndoe: {
    id: 'johndoe',
    name: 'John Doe',
    avatarURL:
      'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
    answers: {
      xj352vofupe1dqz9emx13r: 'optionOne',
      vthrdm985a262al8qx3do: 'optionTwo',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo',
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  },
};

let questions = {
  '8xf0y6ziyjabvozdd253nd': {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory',
    },
  },
  '6ni6ok3ym7mf1p33lnez': {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johndoe',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['johndoe', 'sarahedo'],
      text: 'become a supervillain',
    },
  },
  am8ehyc8byjqgar0jgpub9: {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be telepathic',
    },
  },
  loxhs1bqm25b708cmbf3g: {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be a back-end developer',
    },
  },
  vthrdm985a262al8qx3do: {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['tylermcginnis'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['johndoe'],
      text: 'have your best friend find $500',
    },
  },
  xj352vofupe1dqz9emx13r: {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'johndoe',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johndoe'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'write Swift',
    },
  },
};

function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000);
  });
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000);
  });
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    },
  };
}

export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion,
      };

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id]),
        },
      };

      res(formattedQuestion);
    }, 500);
  });
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer,
          },
        },
      };

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser]),
          },
        },
      };

      res();
    }, 500);
  });
}
