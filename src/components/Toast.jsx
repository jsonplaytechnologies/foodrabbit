import { useEffect } from 'react';
import { FiX, FiCheck, FiAlertCircle } from 'react-icons/fi';

const Toast = ({ message, type = 'success', onClose, serviceType = 'food' }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const getBackgroundColor = () => {
    if (type === 'error') return 'bg-red-500';

    // Use service type color for success messages
    if (serviceType === 'grocery') {
      return 'bg-green-600';
    }
    return 'bg-orange-500';
  };

  const getIcon = () => {
    if (type === 'error') {
      return <FiAlertCircle className="w-5 h-5" />;
    }
    return <FiCheck className="w-5 h-5" />;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-in">
      <div className={`${getBackgroundColor()} text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px] max-w-md`}>
        <div className="flex-shrink-0">
          {getIcon()}
        </div>
        <p className="flex-1 font-medium">{message}</p>
        <button
          onClick={onClose}
          className="flex-shrink-0 hover:bg-white/20 rounded p-1 transition-colors"
          aria-label="Close notification"
        >
          <FiX className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
