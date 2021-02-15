var masonry = new Macy({
          container: '#macy-container',
          trueOrder: true,
          waitForImages: false,
          useOwnImageLoader: false,
          debug: true,
          mobileFirst: true,
          columns: 1,
          margin: {
              y: 32,
              x: '0%',
          },
          breakAt: {
              1200: 3,
              940: 3,
              520: 1,
              400: 1
          },
      });
