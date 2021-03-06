function main() {
    var defaultConfig = {
        igBaseChart: {
            skip: true
        },
        igBulletGraph:{
            skip: true
        },
        igColorPickerSplitButton: {
            skip: true
        },
        igBaseEditor: {
            skip: true
        },
        igDataChart: {
            skip: true
        },
        igLinearGauge: {
            skip: true
        },
        igHtmlEditor: {
            skip: true
        },
        igRadialGauge: {
            skip: true
        },
        igMap: {
            skip: true
        },
        IgLayoutManager: {
            skip: true
        },
        IgValidator: {
            skip: true
        },
        IgVideoPlayer: {
            skip: true
        },
        IgZoombar: {
            skip: true
        }
    };

    describe("Basic react wrappers test", function() {
        it("Test rendering component ", function () {
            var suite = $.ig.react.propTypes, component, name, config, opts;
            for (component in suite) {
                if (suite.hasOwnProperty(component) && component.startsWith("ig")) {
                    name = component.charAt(0).toUpperCase() + component.slice(1);
                    config = defaultConfig[name] || defaultConfig[component];
                    opts = config && config.options? config.options : {};
                    if (config && config.skip) {
                        continue;
                    }
                    $.ig.react.test.createOrUpdateComponent(window[name], $.extend({
                        id: "igComponent"
                    }, opts));
                    expect($("#igComponent").data(component)).not.toBeUndefined();
                    $.ig.react.test.emptyElement();
                }
            }
        });
    });
    
}
exports.main = main;