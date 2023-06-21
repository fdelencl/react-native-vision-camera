#import "CameraView.h"

#import <react/renderer/components/VisionCamera/ComponentDescriptors.h>
#import <react/renderer/components/VisionCamera/EventEmitters.h>
#import <react/renderer/components/VisionCamera/Props.h>
#import <react/renderer/components/VisionCamera/RCTComponentViewHelpers.h>

#import "RCTFabricComponentsPlugins.h"

#import "VisionCamera-Swift.h"


using namespace facebook::react;

@interface CameraView () <RCTCameraViewViewProtocol>
@end

@implementation CameraView {
  CameraViewSwf *_view;
}

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
  return concreteComponentDescriptorProvider<CameraViewComponentDescriptor>();
}

- (instancetype)initWithFrame:(CGRect)frame
{
  if (self = [super initWithFrame:frame]) {
    static const auto defaultProps = std::make_shared<const CameraViewProps>();
    _props = defaultProps;

    // _view = [[CameraViewSwf alloc] init];
    self.backgroundColor = [UIColor redColor];

    // _label = [[UILabel alloc] init];
    // _label.text = @"Initial value";
    // [_view addSubview:_label];

    // _label.translatesAutoresizingMaskIntoConstraints = false;
    // [NSLayoutConstraint activateConstraints:@[
    //   [_label.leadingAnchor constraintEqualToAnchor:_view.leadingAnchor],
    //   [_label.topAnchor constraintEqualToAnchor:_view.topAnchor],
    //   [_label.trailingAnchor constraintEqualToAnchor:_view.trailingAnchor],
    //   [_label.bottomAnchor constraintEqualToAnchor:_view.bottomAnchor],
    // ]];

    // _label.textAlignment = NSTextAlignmentCenter;

    // self.contentView = _view;
  }

  return self;
}

- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps
{
  const auto &oldViewProps = *std::static_pointer_cast<CameraViewProps const>(_props);
  const auto &newViewProps = *std::static_pointer_cast<CameraViewProps const>(props);

  // if (oldViewProps.text != newViewProps.text) {
  //   _label.text = [[NSString alloc] initWithCString:newViewProps.text.c_str() encoding:NSASCIIStringEncoding];
  // }

  [super updateProps:props oldProps:oldProps];
}

@end

Class<RCTComponentViewProtocol> CameraViewCls(void)
{
  return CameraView.class;
}


