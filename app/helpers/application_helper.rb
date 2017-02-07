module ApplicationHelper
  BOOTSTRAP_FLASH_MSG = {
      success: 'alert alert-success',
      error: 'alert alert-danger',
      alert: 'alert alert-warning',
      notice: 'alert alert-success'
    }

  def bootstrap_class_for(flash_type)
    BOOTSTRAP_FLASH_MSG.fetch(flash_type.to_sym)
  end

  def flash_messages(opts = {})
    flash.each do |msg_type, message|
      concat(content_tag(:div, message, class: "alert #{bootstrap_class_for(msg_type)} alert-dismissible", role: 'alert') do
        concat(content_tag(:button, class: 'close', data: { dismiss: 'alert' }) do
          concat content_tag(:i, '', class:'fa fa-times', 'aria-hidden' => true)
        end)
        concat message
      end)
    end
    nil
  end

end
